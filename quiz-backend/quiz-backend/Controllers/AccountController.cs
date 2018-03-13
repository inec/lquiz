using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        public class Credentials
        {
            public string Email { get; set; }

            public string Password { get; set; }

            [HttpPost]
        public async Task<IActionResult> Register([FromBody] Credentials credentials)
        {

        } 
    }
}