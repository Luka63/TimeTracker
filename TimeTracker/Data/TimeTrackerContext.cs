using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using TimeTracker.Models;

namespace TimeTracker.Data {
    public class TimeTrackerContext : DbContext {

        public TimeTrackerContext() : base("name=TimeTrackerConnection") {

        }
        public DbSet<ToDo> toDos { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder) {//override OnModelCreating method to specifi table names
            //before: table of todo class would be "todoes"
            modelBuilder.Entity<ToDo>().ToTable("Todos"); //after this table of ToDo will be called "Todos"
            base.OnModelCreating(modelBuilder);
        }
    }
}