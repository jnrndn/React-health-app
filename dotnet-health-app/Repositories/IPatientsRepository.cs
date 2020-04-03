using dotnet_health_app.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Threading.Tasks;

namespace dotnet_health_app.Repositories
{
    public interface IPatientsRepository
    {
        Task<EntityEntry<Patient>> RegisterPatient(Patient patient);
    }
}
