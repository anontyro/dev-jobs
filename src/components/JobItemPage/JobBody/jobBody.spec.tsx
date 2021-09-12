import React from "react";
import renderer from "react-test-renderer";
import JobBody from ".";
import JobQueryData from "../../../interfaces/jobQueryData";

describe("JobBody", () => {
  it("renders correctly", () => {
    const job = {
      dateTimeAdded: "1630116426229",
      type: "Full Time",
      title: "Software Engineer",
      locations: ["London"],
      company: {
        description: "We are a small team of software engineers",
      },
      details: {
        requirements: {
          description: "We are looking for a software engineer",
          info: ["Something here"],
        },
        responsibilities: {
          description: "You will be doing this",
          info: ["Creating awesome new apps", "Using awesome new languages"],
        },
      },
    } as unknown as JobQueryData;
    const tree = renderer.create(<JobBody job={job} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
