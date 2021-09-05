import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import MainLayout from "../components/_layout";
import JobQueryData from "../interfaces/jobQueryData";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

interface JobPageProps {
  job: JobQueryData;
}

// JOBHEADER ----

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
`;

// todo extract this seperate file as used here and index
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

const JobHeader: React.FC<JobPageProps> = ({ job }) => (
  <JobPageHeaderContainer
    className="card"
    backgroundColor={job.company.backgroundColor}
  >
    <div className="company-name boldest">
      <span>{job.company.name}</span>
    </div>
    <div className="company-detail">
      <JobCardBody>
        <h3>{job.company.name}</h3>
        <p className="card-text-muted">{job.company.url}</p>
      </JobCardBody>
      <div className="company-detail-buttons flex-center-items">
        <button className="button light">Company Site</button>
      </div>
    </div>
  </JobPageHeaderContainer>
);

//JOBBODY -------

//todo extract style to seperate file
const JobCardHeader = styled.div`
  display: flex;
  font-size: 0.9rem;
  font-family: "Noto Sans JP", sans-serif;
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
  .job-card-header-button {
  }
`;

//todo extract to seperate file
const JobCardFooter = styled.div`
  font-size: 0.8rem;
  font-family: "Noto Sans JP", sans-serif;
`;

const JobPageContainer = styled.div`
  width: 60%;
  margin: auto;
`;

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

const JobBody: React.FC<JobPageProps> = ({ job }) => (
  <JobContentContainer className="card job">
    <JobCardHeader className="card-header">
      <div className="job-card-header-body">
        <ul className="card-text-muted card-header-content">
          <li>{dateToNow(job.dateTimeAdded)}</li>
          <li>{job.type}</li>
        </ul>
        <h3>{job.title}</h3>
        <JobCardFooter className="card-footer">
          <span>{job.locations[0]}</span>
        </JobCardFooter>
      </div>
      <div className="flex-center-items job-card-header-button">
        <button className="button default">Apply Now</button>
      </div>
    </JobCardHeader>

    <div className="job-content-details">
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

// JOBFOOTER ------

const JobFooterContainer = styled.div``;

const JobFooter = () => <JobFooterContainer></JobFooterContainer>;

interface Props {
  data: any;
}

const JobItem: React.FC<Props> = ({ data }) => {
  const job = data.allSitePage.edges[0].node.context.job as JobQueryData;
  return (
    <MainLayout>
      <JobPageContainer>
        <JobHeader job={job} />
        <JobBody job={job} />
      </JobPageContainer>
    </MainLayout>
  );
};

export const pageQuery = graphql`
  query ($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            job {
              id
              locations
              salary
              startDate
              title
              type
              dateTimeAdded
              details {
                description
                contact {
                  email
                  name
                  phone
                }
                requirements {
                  description
                  info
                }
                responsibilities {
                  description
                  info
                }
              }
              company {
                name
                backgroundColor
                companySize
                description
                industry
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default JobItem;
