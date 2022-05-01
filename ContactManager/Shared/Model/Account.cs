using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ContactManager.Shared.Model
{
    public class Account
    {
        public int Id { get; set; }
        public string name { get; set; }

        public Account(string name)
        {
            this.name = name;
        }

        public Account()
        {

        }

    }
}
