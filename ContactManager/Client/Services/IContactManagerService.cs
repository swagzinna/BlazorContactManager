using ContactManager.Shared.Model;

namespace ContactManager.Client.Services
{
    public interface IContactManagerService
    {
        Task<List<Contact>> getContactList();

        Contact getSelectedContact();

        void setSelectedContact(Contact newSelectedContact);

        Task<Contact> addContact(Contact newContact);

        Task<Contact> removeContact(Contact contact);

        Task<Contact> updateContact(Contact contact);

        bool isValidContact(Contact contact);

        bool mailIsTaken(Contact newContact, List<Contact> contactList);

        bool isValidEmail(string mail);
    }
}
