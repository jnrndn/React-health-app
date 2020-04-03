namespace dotnet_health_app.Controllers.DTO
{
    using System;
    public class RegisterInput
    {
        public class IllnessData
        {
            public int Key { get; set; }
            public string Label { get; set; }
        }

        public int Id { get; set; }
        public int BirthDate { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IllnessData[] Illness { get; set; }
    }
}
