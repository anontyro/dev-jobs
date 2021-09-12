import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import MainLayout from "../components/_layout";
import JobQueryData from "../interfaces/jobQueryData";
import JobHeader from "../components/JobItemPage/JobHeader";
import JobBody from "../components/JobItemPage/JobBody";
import JobFooter from "../components/JobItemPage/JobFooter";

// JOBFOOTER ------

const JobPageContainer = styled.div`
  width: 60%;
  margin: auto;
  @media (max-width: 768px) {
    width: 75%;
  }
  @media (max-width: 425px) {
    width: 95%;
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
        <JobHeader job={job} />
        <JobBody job={job} />
      </JobPageContainer>
      <JobFooter job={job} />
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
