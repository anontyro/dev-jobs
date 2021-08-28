import styled from "@emotion/styled";
import * as React from "react";
import MainLayout from "../components/_layout";

const IndexContainer = styled.div`
  width: 75%;
  margin: auto;
`;

const SearchBar = styled.div`
  margin-top: -3rem;
  margin-bottom: 5rem;
`;

const IndexPage = () => {
  return (
    <MainLayout>
      <IndexContainer>
        <SearchBar className="card">Top container</SearchBar>
        <div className="card list-container">List container</div>
      </IndexContainer>
    </MainLayout>
  );
};

export default IndexPage;
