$(document).ready(function () {
    // alert("ready");
    var TODOS = $.ajax({ url: "/api/todos/", type: "GET", datatype: "JASON" });
    TODOS.done(draw);

    function update(id, title) {
        $.getJSON("/api/todos/" + id).done(function (todo) {

            if (todo) {
                todo.isComplete = true;
                if (title) {
                    todo.title = title;
                }

                $.ajax({
                    url: "/api/todos/" + id,
                    type: "PUT",
                    datatype: "JASON",
                    data: todo
                }).done(render);
            }

        });
    }

    function draw(data) {
        //  alert("drawing");
        var ULToso = $("#TodoList");
        ULToso.empty();
        // var results = data.items;
        console.log(data)
        //    if (data.length) {
        $.each(data, function (i, todo) {
            var Li = $("<li class='list-group-item'/>").data("id", todo.id);

            var div = ($("<div class='clearfix'  style='text-anchor:middle'/>"));

            var Left = ($("<div class='pull-left myTitle'/>"));

            Left.append($("<span/>").text(todo.title));

            var right = ($("<div class='pull-right'>"));
            right.append($("<button  class='btn btn - sm btn - primary complete'>Complete</button>"));
            right.append($("<button  class='btn btn-sm btn-danger delete'><span class='glyphicon glyphicon-trash'/> Delete</button>"));

            Left.appendTo(div);
            right.appendTo(div);
            Li.append(div);

            ULToso.append(Li);

        });


        function render(data) {

            var TODOS = $.ajax({ url: "/api/todos/", type: "GET", datatype: "JASON" });

            TODOS.done(draw);
        }

        $("#btnSave").on("click", function () {
            var Title = $("#NewTodo").val();
            var url = "/api/todos/";
            var Todo = { Title: Title, IsComplete: false, Priority: 3 }

            var TodoResult = $.ajax({ url: url, type: "POST", data: Todo });
            $("#NewTodo").val("");
            TodoResult.done(render);
        })

        $("#TodoList").on("click", ".delete", function () {
            var li = $(this).closest("li");
        });

        $("#TodoList").on("click", ".complete", function () {
            var id = $(this).closest("li").data("id");
            alert(id)
            update(id);
        })

        $("#TodoList").on("blur", ".form-control", function () {
            var li = $(this).closest("li");
            if (li) {
                update(li.data("id"), $(this).val());
            }
        })

        $("#TodoList").on("dblclick", "li", function () {
            var li = $(this);

            if (li) {
                var workingSpan = li.find("span");
                var input = (li.find(".pull-left").find("input"));
                if (input && input.length) {
                    ;
                } else {
                    input = $("<input type='text' class='form-control'>").val(workingSpan.text());

                    li.find(".pull-left").append(input);
                }
                workingSpan.hide();
            }

        })
        $("#TodoList").show();
        //} else {
        //    alert("nigga i aint got no shit");
        //}
    }
});