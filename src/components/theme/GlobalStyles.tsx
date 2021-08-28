import { Global, css } from "@emotion/react";
import React from "react";
import CustomTheme from "./Theme";

interface Props {
  theme: CustomTheme;
}

const createStyles = (theme: CustomTheme) => {
  return css`
    html,
    body {
      height: 100%;
      position: relative;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: ${theme.colors.background};
      color: ${theme.colors.textSecondary};
    }
    .card {
      background: ${theme.colors.card.background};
      color: ${theme.colors.card.text};
      min-height: 3rem;
      margin-bottom: 2rem;
      border-radius: 10px;
      padding: 15px;
    }
  `;
};

const GlobalStyles: React.FC<Props> = ({ theme }) => {
  return <Global styles={createStyles(theme)} />;
};

export default GlobalStyles;
