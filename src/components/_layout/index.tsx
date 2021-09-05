import React, { ReactNode, useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import { useEffect } from "react";
import useTheme from "../theme/useTheme";
import GlobalStyles from "../theme/GlobalStyles";
import CustomTheme from "../theme/Theme";
import { Helmet } from "react-helmet";

interface HeaderProps {
  theme: CustomTheme;
}

const Header = styled.div`
  width: 100%;
  height: 10rem;
  border-bottom-left-radius: 5rem;
  background-color: ${(props: HeaderProps) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  .header-content {
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    h1 {
      margin: 0;
      color: white;
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
    height: 6rem;
    border-bottom-left-radius: 0;
    .header-content {
      width: 95%;
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

interface Props {
  children: ReactNode;
}

const MainContainer = styled.div``;

const MainLayout: React.FC<Props> = ({ children }) => {
  const { theme, themeLoaded } = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<CustomTheme>(theme);
  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      {themeLoaded && (
        <>
          <GlobalStyles theme={selectedTheme} />
          <Header theme={selectedTheme}>
            <div className="header-content">
              <h1>devjobs</h1>
              <span>toggle</span>
            </div>
          </Header>
          <MainContainer>{children}</MainContainer>
        </>
      )}
    </>
  );
};

export default MainLayout;
