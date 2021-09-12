import React from "react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { JobCardFooter, JobCardHeader } from "../../homePage/JobList";
import JobQueryData from "../../../interfaces/jobQueryData";

const JobItemCardHeader = styled(JobCardHeader)`
  display: flex;
  .job-card-header-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    h3 {
      font-size: 1.5rem;
      margin: 0;
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }
`;

const JobItemCardFooter = styled(JobCardFooter)``;

const JobContentContainer = styled.div`
  .job-content-header {
  }
  .job-content-details {
    li + li:before {
      content: none;
    }
  }
`;

const dateToNow = (date: string) => {
  const toNow = formatDistanceToNow(+date);
  return `${toNow} ago`;
};

interface JobPageProps {
  job: JobQueryData;
}

const JobBody: React.FC<JobPageProps> = ({ job }) => (
  <JobContentContainer className="card job">
    <JobItemCardHeader className="card-header">
      <div className="job-card-header-body">
        <ul className="card-text-muted card-header-content">
          <li>{dateToNow(job.dateTimeAdded)}</li>
          <li>{job.type}</li>
        </ul>
        <h3>{job.title}</h3>
        <JobItemCardFooter className="card-footer">
          <span>{job.locations[0]}</span>
        </JobItemCardFooter>
      </div>
    </JobItemCardHeader>

    <div className="job-content-details">
      <p>{job.company.description}</p>
      <h3 className="bold">Requirements</h3>
      <p>{job.details.requirements.description}</p>
      <ul>
        {job.details.requirements.info.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="job-content-details">
      <h3 className="bold">What You Will Do</h3>
      <p>{job.details.responsibilities.description}</p>
      <ul>
        {job.details.responsibilities.info.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </JobContentContainer>
);

export default JobBody;
