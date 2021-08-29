interface GeneralInfo {
  description: string;
  info: string[];
}

interface JobData {
  title: string;
  type: string;
  locations: string[];
  dateTimeAdded: string;
  salary: string;
  startDate: string;
  details: JobDetails;
}

interface JobDetails {
  description: string;
  requirements: GeneralInfo;
  responsibilities: GeneralInfo;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
}

export default JobData;
