import React, { useState } from "react";
import styled from "@emotion/styled";
import MainLayout from "../components/_layout";
import { getJobList } from "../utils/getJsonData";

const IndexContainer = styled.div`
  width: 75%;
  margin: auto;
`;

const SearchBarContainer = styled.div`
  margin-top: -3rem;
  margin-bottom: 5rem;
`;

interface SearachBarProps {}

const SearchBar: React.FC<SearachBarProps> = () => {
  return (
    <SearchBarContainer className="card">Top container</SearchBarContainer>
  );
};

interface JobListProps {}

const JobList: React.FC<JobListProps> = () => {
  return <div className="card list-container">List container</div>;
};

const IndexPage = () => {
  const [jobList, setJobList] = useState(getJobList().data);
  return (
    <MainLayout>
      <IndexContainer>
        <SearchBar />
        <JobList />
      </IndexContainer>
    </MainLayout>
  );
};

export default IndexPage;
