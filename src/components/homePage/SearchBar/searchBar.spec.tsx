import React from "react";
import renderer from "react-test-renderer";
import SearchBar from ".";

describe("SearchBar tests", () => {
  it("should render without crashing", () => {
    const tree = renderer
      .create(<SearchBar jobList={[]} setJobList={(val: any) => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
