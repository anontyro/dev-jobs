import JobData from "./jobData";

interface CompanyData {
  name: string;
  logo: string;
  locations: string[];
  description: string;
  url: string;
  companySize: string;
  type: string;
  industry: string;
  jobs: JobData[];
}

export default CompanyData;
