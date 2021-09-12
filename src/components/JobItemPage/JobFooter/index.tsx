import React from "react";
import styled from "@emotion/styled";
import JobQueryData from "../../../interfaces/jobQueryData";

const JobFooterContainer = styled.div`
  display: flex;
  height: 5rem;
  .job-footer-container {
    width: 60%;
    margin: 0 auto;
    display: flex;
  }
  .job-footer-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    text-align: left;
    h3 {
      margin: 0;
    }
    p {
      margin: 0.3rem 0;
    }
  }
  .job-footer-button {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
    height: 4rem;
    .job-footer-container {
      width: 95%;
    }
    .job-footer-body {
      display: none;
    }
    .job-footer-button {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`;

interface JobPageProps {
  job: JobQueryData;
}
const JobFooter: React.FC<JobPageProps> = ({ job }) => (
  <JobFooterContainer className="footer job">
    <div className="job-footer-container">
      <div className="job-footer-body">
        <h3 className="bold">{job.title}</h3>
        <p className="card-text-muted">{job.company.name}</p>
      </div>
      <div className="flex-center-items job-footer-button">
        <button className="button default">Apply Now</button>
      </div>
    </div>
  </JobFooterContainer>
);

export default JobFooter;
