﻿using backend.Core.Enums;

namespace backend.Core.Dtos.Company
{
    public class CompanyGetDto
    {
        public long ID { get; set; }
        public string Name { get; set; }

        public CompanySize Size { get; set; }
        public DateTime DateTime { get; set; } = DateTime.Now;
    }
}