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
