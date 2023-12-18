using backend.Core.Enums;

namespace backend.Core.Entities
{
    public class Job : BaseEntity
    {
        public string Title { get; set; }

        public JobLEVEL Level { get; set; }

        public long CompanyID { get; set; }

        public Company Company { get; set; }

        public ICollection<Candidate> Candidates { get; set; }

    }
}
