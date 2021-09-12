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

  const job2 = makeJobMockData(
    "2",
    "UX Designer",
    ["United States", "Seattle"],
    "Contract"
  );

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

  it("will only return the relivent jobs when title is set", () => {
    const companys = makeMockCompanys();
    const search: InitalJobQuery = {
      title: "Product Manager",
      location: "",
      isFullTime: false,
    };

    const results = filterCompanyList(search, ...companys);
    expect(results.length).toEqual(1);
    expect(results[0].jobs.length).toEqual(1);
    expect(results[0].jobs[0].title).toEqual("Product Manager");
  });

  it("will not return any results when the location does not match any job titles", () => {
    const companys = makeMockCompanys();
    const search: InitalJobQuery = {
      title: "Product Manager",
      location: "Seattle",
      isFullTime: false,
    };

    const results = filterCompanyList(search, ...companys);
    expect(results.length).toEqual(0);
  });

  it("will filter out none full time jobs when set to true", () => {
    const companys = makeMockCompanys();
    const search: InitalJobQuery = {
      title: "",
      location: "",
      isFullTime: true,
    };

    const results = filterCompanyList(search, ...companys);
    const bigBlue = results.find((company) => company.name === "Big Blue");
    expect(bigBlue.jobs.length).toEqual(1);
    expect(bigBlue.jobs[0].title).toEqual("Software Engineer");
  });
});
