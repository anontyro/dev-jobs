import React from "react";
import renderer from "react-test-renderer";
import JobList from ".";
import {
  makeCompanyMockData,
  makeJobMockData,
} from "../../../mocks/company/company-mock";

describe("JobList", () => {
  it("renders correctly", () => {
    const job1 = makeJobMockData("1", "Software Engineer", ["London"]);
    const job2 = makeJobMockData("2", "Product Designer", ["United State"]);
    const job3 = makeJobMockData("3", "Engineering Manager", ["London"]);
    const job4 = makeJobMockData("4", "Senior Software Engineer", [
      "London",
      "United States",
    ]);

    const company1 = makeCompanyMockData(
      "first company",
      ["London", "United States"],
      job1,
      job2
    );
    const company2 = makeCompanyMockData("another company", ["London"], job3);
    const company3 = makeCompanyMockData(
      "totally different inc",
      ["London", "United States"],
      job4
    );

    const tree = renderer
      .create(<JobList companyList={[company1, company2, company3]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
