using dotnet_health_app.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet_health_app.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {  }

        public DbSet<Patient> Patients { get; set; }


    }
}
