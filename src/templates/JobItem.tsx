import React from "react";
import { graphql } from "gatsby";
import MainLayout from "../components/_layout";
import JobQueryData from "../interfaces/jobQueryData";

interface Props {
  data: any;
}

const JobItem: React.FC<Props> = ({ data }) => {
  const job = data.allSitePage.edges[0].node.context.job as JobQueryData;
  return (
    <MainLayout>
      <div>Test template {job.title}</div>
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
              }
            }
          }
        }
      }
    }
  }
`;

export default JobItem;
