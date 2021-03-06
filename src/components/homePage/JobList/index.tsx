import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import CompanyData from "../../../interfaces/companyData";
import { createPageUri } from "../../../utils/pageUri";

interface JobListProps {
  companyList: CompanyData[];
}

const JobListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem 1rem;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem 1rem;
  }
`;

const JobCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px 15px 15px 15px;
  &:hover {
    box-shadow: 0px 3px 4px 0px #c8c8c8;
  }
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
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const JobCardHeader = styled.div`
  font-size: 0.9rem;
  font-family: "Noto Sans JP", sans-serif;
`;

export const JobCardBody = styled.div`
  height: 5rem;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-top: 5px;
  }
`;

export const JobCardFooter = styled.div`
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
          <Link to={createPageUri(job.id, company.name)} key={job.id}>
            <JobCard className="card list-container">
              <JobCardLogo
                url={company.logo}
                backgroundColor={company.backgroundColor}
              >
                <div className="card-logo"></div>
                <span className="bold">{company.name}</span>
              </JobCardLogo>
              <JobCardHeader className="card-text-muted card-header">
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
          </Link>
        ))
      )}
    </JobListContainer>
  );
};

export default JobList;
