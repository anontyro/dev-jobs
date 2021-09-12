import React, { useState } from "react";
import styled from "@emotion/styled";
import MainLayout from "../components/_layout";
import { getJobList } from "../utils/getJsonData";
import CompanyData from "../interfaces/companyData";
import { formatDistanceToNow } from "date-fns";
import { Link } from "gatsby";
import { createPageUri } from "../utils/pageUri";
import SearchBar from "../components/homePage/SearchBar";
import JobList from "../components/homePage/JobList";

const IndexContainer = styled.div`
  width: 75%;
  margin: auto;
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;

const IndexPage = () => {
  const [jobList, setJobList] = useState(getJobList());
  return (
    <MainLayout>
      <IndexContainer>
        <SearchBar jobList={jobList} setJobList={setJobList} />
        <JobList companyList={jobList} />
      </IndexContainer>
    </MainLayout>
  );
};

export default IndexPage;
