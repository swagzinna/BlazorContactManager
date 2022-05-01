using ContactManager.Server.Data;
using ContactManager.Shared.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContactManager.Server.Controller
{
    [Route("api/[Controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        private readonly DataContext _context;

        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Account>> getAccountList()
        {
            return Ok(_context.Accounts.ToList());
        }

        [HttpPost]
        public async Task<ActionResult<Account>> addAccount(Account newAccount)
        {
            _context.Add(newAccount);
            await _context.SaveChangesAsync();

            return newAccount;
        }

    }
}
