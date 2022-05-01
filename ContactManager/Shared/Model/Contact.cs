using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ContactManager.Shared.Model
{
    public class Contact
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string mail { get; set; }
        public string gender { get; set; }
        public string address { get; set; }
        public string birthday { get; set; }
        public string phone { get; set; } 
        public int accountID { get; set; }

        public Contact()
        {

        }

    }
}
    