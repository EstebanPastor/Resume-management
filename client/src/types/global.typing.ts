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
