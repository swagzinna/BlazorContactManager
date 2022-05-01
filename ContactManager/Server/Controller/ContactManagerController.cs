using ContactManager.Server.Data;
using ContactManager.Shared.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContactManager.Server.Controller
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ContactManagerController : ControllerBase
    {

        private readonly DataContext _context;

        public ContactManagerController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Contact>> getContactList()
        {
            return Ok(_context.Contacts.OrderBy(contact => contact.name));
        }

        [HttpPost]
        public async Task<ActionResult<Contact>> addContact(Contact newContact)
        {
            _context.Add(newContact);
            await _context.SaveChangesAsync();

            return newContact;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> removeContact(int id)
        {
            Contact contactToRemove = new Contact();
            List<Contact> contacts = _context.Contacts.ToList();
            foreach (Contact contact in contacts)
            {
                if(contact.Id == id)
                {
                    contactToRemove = contact;
                }
            }
            _context.Remove(contactToRemove);
            await _context.SaveChangesAsync();

            return contactToRemove;
        }

        [HttpPut]
        public async Task<ActionResult<Contact>> updateContact(Contact contact)
        {
            _context.Entry(contact).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return contact;
        }

        [HttpGet("{id}")]
        public ActionResult<List<Contact>> getContactsForAccount(int id)
        {
            return Ok(_context.Contacts.Where(x => x.accountID == id).ToList());
        }
    }
}
