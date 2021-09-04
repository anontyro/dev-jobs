import { Global, css } from "@emotion/react";
import React from "react";
import CustomTheme from "./Theme";

interface Props {
  theme: CustomTheme;
}

const createStyles = (theme: CustomTheme) => {
  return css`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto&display=swap");
    html,
    body {
      height: 100%;
      position: relative;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
    }
    body {
      background: ${theme.colors.background};
      color: ${theme.colors.textSecondary};
    }
    a {
      text-decoration: none;
      color: ${theme.colors.textSecondary};
    }
    .card {
      background: ${theme.colors.card.background};
      color: ${theme.colors.card.text};
      min-height: 3rem;
      border-radius: 10px;
      padding: 15px;
    }
    .card-text-muted {
      color: ${theme.colors.card.textMuted};
    }
    .card-footer {
      color: ${theme.colors.card.textSecondary};
      font-weight: 600;
    }
    .button.default {
    }
    .button.light {
      background-color: ${theme.colors.buttonSecondary.background};
      color: ${theme.colors.buttonSecondary.text};
      border: 1px solid ${theme.colors.buttonSecondary.border};
      border-radius: 5px;
      font-size: 1rem;
      padding: 0.7rem 1rem;
    }
    ul.card-header-content {
      list-style: none;
      padding: 0;
      margin: 10px 0;
    }
    ul.card-header-content > li {
      display: inline-block;
      margin-right: 5px;
    }
    li + li:before {
      content: " • ";
    }
  `;
};

const GlobalStyles: React.FC<Props> = ({ theme }) => {
  return <Global styles={createStyles(theme)} />;
};

export default GlobalStyles;
