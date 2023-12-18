using backend.Core.Entities;
using backend.Core.Enums;

namespace backend.Core.Dtos.Job
{
    public class JobGetDto
    {
        public long ID { get; set; }
        public string Title { get; set; }
        public JobLEVEL Level { get; set; }
        
        public long CompanyID { get; set; }

        public string CompanyName { get; set; }

        public DateTime DateTime { get; set; } = DateTime.Now;


    }
}
