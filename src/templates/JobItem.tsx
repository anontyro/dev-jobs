import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import MainLayout from "../components/_layout";
import JobQueryData from "../interfaces/jobQueryData";

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

const JobPageContainer = styled.div`
  width: 60%;
  margin: auto;
`;

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
    display: flex;
    justify-content: center;
    align-items: center;
  }
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

interface Props {
  data: any;
}

const JobItem: React.FC<Props> = ({ data }) => {
  const job = data.allSitePage.edges[0].node.context.job as JobQueryData;
  return (
    <MainLayout>
      <JobPageContainer>
        <JobPageHeaderContainer
          className="card"
          backgroundColor={job.company.backgroundColor}
        >
          <div className="company-name">
            <span>{job.company.name}</span>
          </div>
          <div className="company-detail">
            <JobCardBody>
              <h3>{job.company.name}</h3>
              <p className="card-text-muted">{job.company.url}</p>
            </JobCardBody>
            <div className="company-detail-buttons">
              <button className="button light">Company Site</button>
            </div>
          </div>
        </JobPageHeaderContainer>
        <JobContentContainer className="card">
          <div className="job-content-header"></div>
          <div className="job-content-details">
            <h3>Requirements</h3>
            <p>{job.details.requirements.description}</p>
            <ul>
              {job.details.requirements.info.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="job-content-details">
            <h3>What You Will Do</h3>
            <p>{job.details.responsibilities.description}</p>
            <ul>
              {job.details.responsibilities.info.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </JobContentContainer>
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
