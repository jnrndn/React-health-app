using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using dotnet_health_app.Controllers.DTO;
using dotnet_health_app.Services;
using dotnet_health_app.Models;

namespace dotnet_health_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly IPatientsService _patientsService;

        public PatientsController(IPatientsService patientsService)
        {   
            _patientsService = patientsService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RegisterInput input)
        {
            var patient = new Patient {
                Id= input.Id,
                BirthDate = input.BirthDate,
                Email = input.Email,
                FirstName = input.FirstName,
                LastName = input.LastName,
                Illness = input.Illness,
            };
            var result = await _patientsService.AddPatient(patient);
            return CreatedAtAction($"{result.State}", new
            {
                result.Entity

            });

        }
    }
}   
