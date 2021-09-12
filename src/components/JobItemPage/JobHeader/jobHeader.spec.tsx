import React from "react";
import renderer from "react-test-renderer";
import JobHeader from ".";
import JobQueryData from "../../../interfaces/jobQueryData";

describe("JobHeader", () => {
  it("renders correctly", () => {
    const job = {
      dateTimeAdded: "1630116426229",
      type: "Full Time",
      title: "Software Engineer",
      locations: ["London"],
      company: {
        name: "Big Blue",
        url: "https://somesite.somewhere",
        backgroundColor: "#ffffff",
        description: "We are a small team of software engineers",
      },
      details: {},
    } as unknown as JobQueryData;
    const tree = renderer.create(<JobHeader job={job} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
