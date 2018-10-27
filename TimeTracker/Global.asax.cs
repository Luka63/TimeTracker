using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Web.Http;
using System.Web.Mvc;   
using System.Web.Optimization;
using System.Web.Routing;
using System.Xml;

namespace TimeTracker {
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore; //no looping with properties
            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.NullValueHandling = NullValueHandling.Ignore; //no null values wil be retuned
            GlobalConfiguration.Configuration.Formatters.Remove(GlobalConfiguration.Configuration.Formatters.XmlFormatter); //xml formatter is removed

            var jsonFormatter = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            var enumConverter = new Newtonsoft.Json.Converters.StringEnumConverter();
            jsonFormatter.SerializerSettings.Converters.Add(enumConverter); // !!!!

            var settings = jsonFormatter.SerializerSettings;
            settings.Formatting = Newtonsoft.Json.Formatting.Indented; //!!
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver(); //!!
        }
    }
}
