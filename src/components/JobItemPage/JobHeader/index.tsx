import React from "react";
import styled from "@emotion/styled";
import { JobCardBody } from "../../homePage/JobList";
import JobQueryData from "../../../interfaces/jobQueryData";

interface JobPageHeaderContainer {
  backgroundColor: string;
}

const JobPageHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8rem;
  padding: 0;
  margin-top: -2.5rem;
  margin-bottom: 2.5rem;
  .company-name {
    background-color: ${(props: JobPageHeaderContainer) =>
      props.backgroundColor};
    color: white;
    flex-shrink: 0;
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 0 0 10px;
    font-size: 1.5rem;
    text-transform: lowercase;
  }
  .company-detail {
    display: flex;
    flex-grow: 1;
    padding: 2rem;
    justify-content: space-between;
  }
  .company-detail-buttons {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
    height: 10rem;
    flex-direction: column;
    margin-top: -0.5rem;
    position: relative;
    margin-bottom: 1rem;
    .company-name {
      position: absolute;
      top: -2.5rem;
      width: 4rem;
      left: 42%;
      height: 4rem;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 400;
    }
    .company-detail {
      padding: 2rem;
      flex-direction: column;
      text-align: center;
    }
  }
`;

const JobItemCardBody = styled(JobCardBody)`
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
    height: auto;
  }
`;

interface JobPageProps {
  job: JobQueryData;
}

const JobHeader: React.FC<JobPageProps> = ({ job }) => (
  <JobPageHeaderContainer
    className="card"
    backgroundColor={job.company.backgroundColor}
  >
    <div className="company-name boldest">
      <span>{job.company.name}</span>
    </div>
    <div className="company-detail">
      <JobItemCardBody>
        <h3>{job.company.name}</h3>
        <p className="card-text-muted">{job.company.url}</p>
      </JobItemCardBody>
      <div className="company-detail-buttons flex-center-items">
        <button className="button light">Company Site</button>
      </div>
    </div>
  </JobPageHeaderContainer>
);

export default JobHeader;
