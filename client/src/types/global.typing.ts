export interface ICompany {
  id: string;
  name: string;
  size: string;
  dateTime: string;
}

export interface ICreateCompanyDto {
  name: string;
  size: string;
}

export interface IJob {
  id: string;
  title: string;
  level: string;
  companyID: string;
  companyName: string;
  dateTime: string;
}

export interface ICreateJobDto {
  title: string;
  level: string;
  companyID: string;
}

export interface ICandidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeUrl: string;
  jobId: string;
  jobTitle: string;
}

export interface ICandidateDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  jobId: string;
}
