using dotnet_health_app.Models;
using dotnet_health_app.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Threading.Tasks;

namespace dotnet_health_app.Services
{
    public class PatientsService: IPatientsService
    {
        private readonly IPatientsRepository _patientsRepository;
        public PatientsService(IPatientsRepository patientsRepository)
        {
            _patientsRepository = patientsRepository;
        }

        public async Task<EntityEntry<Patient>> AddPatient(Patient patient)
        {
            try
            {
                return await _patientsRepository.RegisterPatient(patient);
            }
            catch (Exception e)
            {

                throw new Exception($"Error trying to register {patient.Id}", e);
            }
        }
    }
}
