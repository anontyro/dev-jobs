import React, { useState } from "react";
import styled from "@emotion/styled";
import MainLayout from "../components/_layout";
import { getJobList } from "../utils/getJsonData";
import CompanyData from "../interfaces/companyData";
import { formatDistanceToNow } from "date-fns";

// SEARCH SECTION ---------------------

const SearchBarContainer = styled.div`
  margin-top: -3rem;
  margin-bottom: 5rem;
`;

interface SearachBarProps {
  jobList: CompanyData[];
  setJobList: (val: CompanyData[]) => void;
}

const SearchBar: React.FC<SearachBarProps> = ({ jobList, setJobList }) => {
  return (
    <SearchBarContainer className="card">Top container</SearchBarContainer>
  );
};

// JOB LIST SECTION ---------------------

interface JobListProps {
  companyList: CompanyData[];
}

const JobListContainer = styled.div``;

const JobCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

interface JobCardLogoProps {
  url: string;
}

const JobCardLogo = styled.div`
  background-image: url(${(props: JobCardLogoProps) => props.url});
`;
const JobCardHeader = styled.div``;
const JobCardBody = styled.div``;

const dateToNow = (date: string) => {
  const toNow = formatDistanceToNow(+date);
  return `${toNow} ago`;
};

const JobList: React.FC<JobListProps> = ({ companyList }) => {
  return (
    <JobListContainer>
      {companyList.map((company, ci) =>
        company.jobs.map((job, ji) => (
          <JobListContainer className="card list-container" key={job.id}>
            <JobCardLogo url={company.logo} />
            <JobCardHeader>
              <span>{dateToNow(job.dateTimeAdded)}</span>
              <span>{job.type}</span>
            </JobCardHeader>
            <JobCardBody>
              <h3>{job.title}</h3>
              <p>{company.name}</p>
            </JobCardBody>
          </JobListContainer>
        ))
      )}
    </JobListContainer>
  );
};

// INDEX PAGE ---------------------

const IndexContainer = styled.div`
  width: 75%;
  margin: auto;
`;

const IndexPage = () => {
  const [jobList, setJobList] = useState(getJobList().data);
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
