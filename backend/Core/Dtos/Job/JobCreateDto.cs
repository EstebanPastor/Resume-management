using backend.Core.Enums;

namespace backend.Core.Dtos.Job
{
    public class JobCreateDto
    {
        public string Title { get; set; }

        public JobLEVEL Level { get; set; }

        public long CompanyID { get; set; }
    }
}
