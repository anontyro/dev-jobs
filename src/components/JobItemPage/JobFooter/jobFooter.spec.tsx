import React from "react";
import renderer from "react-test-renderer";
import JobFooter from ".";
import JobQueryData from "../../../interfaces/jobQueryData";

describe("JobFooter", () => {
  it("renders correctly", () => {
    const job = {
      title: "test job",
      company: {
        name: "the company",
      },
    } as unknown as JobQueryData;
    const tree = renderer.create(<JobFooter job={job} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
