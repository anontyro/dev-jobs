import React, { useState } from "react";
import styled from "@emotion/styled";
import MainLayout from "../components/_layout";
import { getJobList } from "../utils/getJsonData";
import CompanyData from "../interfaces/companyData";
import { formatDistanceToNow } from "date-fns";
import { Link } from "gatsby";
import { createPageUri } from "../utils/pageUri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarker } from "@fortawesome/free-solid-svg-icons";
// SEARCH SECTION ---------------------

const SearchBarContainer = styled.div`
  margin-top: -2.5rem;
  margin-bottom: 5rem;
  .card-content.search {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    .search-query {
      width: 100%;
    }
    .search-location {
      width: 100%;
    }
    .search-controls {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      label {
        display: flex;
        align-items: center;
      }
      button {
        .search-icon {
          display: none;
        }
      }
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    .card-content.search {
      .search-query {
      }
      .search-location {
        display: none;
      }
    }
  }
  @media (max-width: 425px) {
    margin-top: -1rem;
    .card-content.search {
      .search-query {
        .search-icon {
          display: none;
        }
      }
      .search-controls {
        label {
          display: none;
        }
        button {
          min-width: 1rem;
          span.search-text {
            display: none;
          }
          .search-icon {
            display: inline-block;
            margin: auto;
          }
        }
      }
    }
  }
`;

const initalJobQuery = {
  title: "",
  location: "",
  isFullTime: false,
};

interface SearachBarProps {
  jobList: CompanyData[];
  setJobList: (val: CompanyData[]) => void;
}

const SearchBar: React.FC<SearachBarProps> = ({ jobList, setJobList }) => {
  const [jobQuery, setJobQuery] = useState({ ...initalJobQuery });

  const searchJobs = () => {
    const results = getJobList().map((company: CompanyData) => {
      const jobs = company.jobs.filter((j) => {
        return jobQuery.title !== ""
          ? j.title.toLowerCase().includes(jobQuery.title.toLowerCase())
          : true && jobQuery.location !== ""
          ? j.locations
              .map((x) => x.toLowerCase())
              .includes(jobQuery.location.toLowerCase())
          : true && jobQuery.isFullTime
          ? (j.type = "Full Time")
          : true;
      });
      return {
        ...company,
        jobs,
      };
    });
    const filteredResults = results.filter((x) => x.jobs.length > 0);
    setJobList(filteredResults);
  };

  return (
    <SearchBarContainer className="card">
      <div className="card-content search">
        <div className="search-query">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input
            className="input-full"
            type="text"
            placeholder="Filter by title..."
            value={jobQuery.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setJobQuery({ ...jobQuery, title: e.target.value })
            }
          />
        </div>
        <div className="search-location">
          <FontAwesomeIcon className="search-icon" icon={faMapMarker} />
          <input
            className="input-full"
            type="text"
            placeholder="Filter by location..."
            value={jobQuery.location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setJobQuery({ ...jobQuery, location: e.target.value })
            }
          />
        </div>
        <div className="search-controls">
          <label htmlFor="">
            <span>Full Time Only</span>
            <input
              type="checkbox"
              name="full-time-only"
              id="full-time"
              checked={jobQuery.isFullTime}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setJobQuery({ ...jobQuery, isFullTime: e.target.checked })
              }
            />
          </label>
          <button className="button default" onClick={searchJobs}>
            <span className="search-text">Search</span>
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
          </button>
        </div>
      </div>
    </SearchBarContainer>
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

// INDEX PAGE ---------------------

const IndexContainer = styled.div`
  width: 75%;
  margin: auto;
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;

const IndexPage = () => {
  const [jobList, setJobList] = useState(getJobList());
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
