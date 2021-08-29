import themes from "../assets/data/themes.json";
import jobList from "../assets/data/JOB_DATA.json";
import { CustomThemeData } from "../components/theme/Theme";
import Results from "../interfaces/Results";
import CompanyData from "../interfaces/companyData";

export const getThemes = (): CustomThemeData => {
  const data = themes.data as CustomThemeData;
  return data;
};

export const getJobList = (): Results<CompanyData[]> => {
  const data = jobList as Results<CompanyData[]>;
  return data;
};
