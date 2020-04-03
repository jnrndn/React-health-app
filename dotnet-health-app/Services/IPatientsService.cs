using dotnet_health_app.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Threading.Tasks;

namespace dotnet_health_app.Services
{
    public interface IPatientsService
    {
        Task<EntityEntry<Patient>> AddPatient(Patient patient);
    }
}
