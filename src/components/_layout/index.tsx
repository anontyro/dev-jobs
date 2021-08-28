import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  children: ReactNode;
}

const MainContainer = styled.div``;

const MainLayout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <MainContainer>{children}</MainContainer>;
};

export default MainLayout;
