using ContactManager.Shared.Model;
using System.ComponentModel.DataAnnotations;
using System.Net.Http.Json;

namespace ContactManager.Client.Services
{
    public class ContactManagerService : IContactManagerService
    {
        private readonly HttpClient _http;
        private Contact selectedContact = new Contact();
        private Account selectedAccount = new Account();

        public ContactManagerService(HttpClient http)
        {
            _http = http;
        }

        public async Task<Contact> addContact(Contact newContact)
        {
            var result = await _http.PostAsJsonAsync("api/ContactManager", newContact);
            return await result.Content.ReadFromJsonAsync<Contact>();
        }

        public async Task<List<Contact>> getContactList()
        {
            return await _http.GetFromJsonAsync<List<Contact>>("api/ContactManager");
        }

        public Contact getSelectedContact()
        {
            return selectedContact;
        }

        public async Task<Contact> removeContact(Contact contact)
        {
            await _http.DeleteAsync($"api/ContactManager/{contact.Id}");
            //var result = await _http.PostAsJsonAsync("api/ContactManager", contact);
            //return await result.Content.ReadFromJsonAsync<Contact>();
            return contact;
        }

        public void setSelectedContact(Contact newSelectedContact)
        {
            selectedContact = newSelectedContact;
        }

        public async Task<Contact> updateContact(Contact contact)
        {
            await _http.PutAsJsonAsync("api/ContactManager", contact);
            return contact;
        }

        public bool isValidContact(Contact contact)
        {
            if (contact.name == "" || contact.mail == "")
            {
                return false;
            }

            return true;
        }

        public bool mailIsTaken(Contact newContact, List<Contact> contactList)
        {
            foreach (var contact in contactList)
            {
                if (contact.mail == newContact.mail)
                {
                    return true;
                }
            }
            return false;
        }

        public bool isValidEmail(string mail)
        {
            if(new EmailAddressAttribute().IsValid(mail))
            {
                return true;
            }
            return false;
        }

        public async Task<List<Account>> getAccountList()
        {
            return await _http.GetFromJsonAsync<List<Account>>("api/Account");
        }

        public async Task<Account> addAccount(Account newAccount)
        {
            var result = await _http.PostAsJsonAsync("api/Account", newAccount);
            return await result.Content.ReadFromJsonAsync<Account>();
        }

        public Account getSelectedAccount()
        {
            return selectedAccount;
        }

        public void setSelectedAccount(Account newSelectedAccount)
        {
            this.selectedAccount = newSelectedAccount;
        }

        public async Task<List<Contact>> getContactsForAccount(Account account)
        {
            return await _http.GetFromJsonAsync<List<Contact>>($"api/ContactManager/{account.Id}");
        }
    }
}
