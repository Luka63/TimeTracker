using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TimeTracker.Data;

namespace TimeTracker.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            using (var db = new TimeTrackerContext()) {
                var todos = db.toDos.ToList();
            }
            return View();
        }

        public ActionResult About() {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact() {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}