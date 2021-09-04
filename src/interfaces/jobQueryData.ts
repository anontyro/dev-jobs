import CompanyData from "./companyData";
import JobData from "./jobData";

interface JobQueryData extends JobData {
  company: CompanyData;
}

export default JobQueryData;
