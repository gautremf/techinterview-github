using System.Web;
using System.Web.Mvc;

namespace GithubDashboard.Controllers
{
    public class PublicEvents : Controller
    {
        // GET: PublicEvents
        public ActionResult Index()
        {
            return View();
        }
    }
}