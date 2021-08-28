import React, { ReactNode, useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import { useEffect } from "react";
import useTheme from "../theme/useTheme";
import GlobalStyles from "../theme/GlobalStyles";
import CustomTheme from "../theme/Theme";

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
      {themeLoaded && (
        <>
          <GlobalStyles theme={selectedTheme} />
          <MainContainer>{children}</MainContainer>
        </>
      )}
    </>
  );
};

export default MainLayout;
