using dotnet_health_app.Controllers.DTO;
using dotnet_health_app.Data;
using dotnet_health_app.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet_health_app.Repositories
{
    public class PatientsRepository: IPatientsRepository
    {
        private readonly DataContext _context;

        public PatientsRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<EntityEntry<Patient>> RegisterPatient(Patient patient)
        {
            var result = await _context.Patients.AddAsync(patient);
            await _context.SaveChangesAsync();
            return result;
        }
    }
}
