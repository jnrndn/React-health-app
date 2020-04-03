namespace dotnet_health_app.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Patient
    {
        public class IllnessData
        {
            public int Key { get; set; }
            public string Label { get; set; }
        }

        [Key]
        public int Id { get; set; }
        public int BirthDate { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IllnessData[] Illness { get; set; }


    }
}
