using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace GithubDashboard.Models
{
    public class PublicEvents : ApiController
    {
        static string _apiUrl = "https://api.github.com/events";
        
        
        //Get api values
        public async Task<IEnumerable<string>> Get()
        {
            var result = await GetExternalResponse();

            return new string[] { result };
        }

        private async Task<string> GetExternalResponse()
        {
            var client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync(_apiUrl);
            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadAsStringAsync();
            return result;
        }
    }
}
