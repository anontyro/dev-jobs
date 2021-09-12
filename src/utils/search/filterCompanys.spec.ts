import CompanyData from "../../interfaces/companyData";
import JobData from "../../interfaces/jobData";
import InitalJobQuery from "../../interfaces/search/initalJobQuery";
import {
  makeCompanyMockData,
  makeJobMockData,
} from "../../mocks/company/company-mock";
import { filterCompanyList } from "./filterCompanys";

const makeMockCompanys = (): CompanyData[] => {
  const job1 = makeJobMockData("1", "Software Engineer", [
    "United Kingdom",
    "London",
  ]);

  const job2 = makeJobMockData("2", "UX Designer", [
    "United States",
    "Seattle",
  ]);

  const job3 = makeJobMockData("3", "Software Engineer", ["France", "Paris"]);
  const job4 = makeJobMockData("4", "Product Manager", [
    "United Kingdom",
    "London",
  ]);

  const company1 = makeCompanyMockData(
    "Big Blue",
    ["United Kingdom", "London", "United States", "Seattle"],
    job1,
    job2
  );

  const company2 = makeCompanyMockData(
    "Big Red",
    ["United Kingdom", "London", "France", "Paris"],
    job3,
    job4
  );

  return [company1, company2];
};

describe("filterCompanyList", () => {
  it("will correctly return the data when no filters are applied", () => {
    const companys = makeMockCompanys();
    const search: InitalJobQuery = {
      title: "",
      location: "",
      isFullTime: false,
    };

    const results = filterCompanyList(search, ...companys);
    expect(results).toEqual(companys);
  });
});
