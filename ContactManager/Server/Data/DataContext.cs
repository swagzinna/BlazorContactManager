using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactManager.Shared.Model;
using Microsoft.EntityFrameworkCore;

namespace ContactManager.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Contact>? Contacts { get; set; }

        public DbSet<Account>? Accounts { get; set; }
    }
}