import React, { useState } from "react";
import styled from "@emotion/styled";
import MainLayout from "../components/_layout";
import { getJobList } from "../utils/getJsonData";
import CompanyData from "../interfaces/companyData";
import { formatDistanceToNow } from "date-fns";

// SEARCH SECTION ---------------------

const SearchBarContainer = styled.div`
  margin-top: -2.5rem;
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

const JobListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem 1rem;
`;

const JobCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px 15px 15px 15px;
`;

interface JobCardLogoProps {
  url: string;
  backgroundColor: string;
}

const JobCardLogo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 15px;
  background-color: ${(props: JobCardLogoProps) => props.backgroundColor};
  position: absolute;
  top: -2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 4px black;
  span {
    color: white;
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  div.card-logo {
    background-image: url(${(props: JobCardLogoProps) => props.url});
    /* width: 75%;
    height: 70%; */
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
const JobCardHeader = styled.div`
  font-size: 0.9rem;
  font-family: "Noto Sans JP", sans-serif;
`;
const JobCardBody = styled.div`
  height: 5rem;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-top: 5px;
  }
`;

const JobCardFooter = styled.div`
  font-size: 0.8rem;
  font-family: "Noto Sans JP", sans-serif;
`;

const dateToNow = (date: string) => {
  const toNow = formatDistanceToNow(+date);
  return `${toNow} ago`;
};

const JobList: React.FC<JobListProps> = ({ companyList }) => {
  return (
    <JobListContainer>
      {companyList.map((company, ci) =>
        company.jobs.map((job, ji) => (
          <JobCard className="card list-container" key={job.id}>
            <JobCardLogo
              url={company.logo}
              backgroundColor={company.backgroundColor}
            >
              <div className="card-logo"></div>
              <span>{company.name}</span>
            </JobCardLogo>
            <JobCardHeader className="card-text-muted  card-header">
              <ul className="card-header-content">
                <li>{dateToNow(job.dateTimeAdded)}</li>
                <li>{job.type}</li>
              </ul>
            </JobCardHeader>
            <JobCardBody>
              <h3>{job.title}</h3>
              <p className="card-text-muted ">{company.name}</p>
            </JobCardBody>
            <JobCardFooter className="card-footer">
              <span>{job.locations[0]}</span>
            </JobCardFooter>
          </JobCard>
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
