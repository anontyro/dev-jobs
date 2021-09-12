import React, { useState } from "react";
import styled from "@emotion/styled";
import { getJobList } from "../../../utils/getJsonData";
import CompanyData from "../../../interfaces/companyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import InitalJobQuery from "../../../interfaces/search/initalJobQuery";
import { filterCompanyList } from "../../../utils/search/filterCompanys";

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

const initalJobQuery: InitalJobQuery = {
  title: "",
  location: "",
  isFullTime: false,
};

interface SearachBarProps {
  jobList: CompanyData[];
  setJobList: (val: CompanyData[]) => void;
}

const SearchBar: React.FC<SearachBarProps> = ({ jobList, setJobList }) => {
  const [jobQuery, setJobQuery] = useState<InitalJobQuery>({
    ...initalJobQuery,
  });

  const searchJobs = () => {
    const companyList = getJobList();
    const results = filterCompanyList(jobQuery, ...companyList);
    setJobList(results);
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

export default SearchBar;
