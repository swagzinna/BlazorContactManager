using ContactManager.Shared.Model;

namespace ContactManager.Client.Services
{
    public interface IContactManagerService
    {
        Task<List<Contact>> getContactList();

        Task<List<Contact>> getContactsForAccount(Account account);

        Task<List<Account>> getAccountList();

        Contact getSelectedContact();

        Account getSelectedAccount();

        void setSelectedContact(Contact newSelectedContact);

        void setSelectedAccount(Account newSelectedAccount);

        Task<Contact> addContact(Contact newContact);

        Task<Account> addAccount(Account newAccount);

        Task<Contact> removeContact(Contact contact);

        Task<Contact> updateContact(Contact contact);

        bool isValidContact(Contact contact);

        bool mailIsTaken(Contact newContact, List<Contact> contactList);

        bool isValidEmail(string mail);
    }
}
