import { Global, css } from "@emotion/react";
import React from "react";
import CustomTheme from "./Theme";

interface Props {
  theme: CustomTheme;
}

const createStyles = (theme: CustomTheme) => {
  return css`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
    html,
    body {
      height: 100%;
      position: relative;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
      font-weight: 200;
    }
    body {
      background: ${theme.colors.background};
      color: ${theme.colors.textSecondary};
    }
    a {
      text-decoration: none;
      color: ${theme.colors.textSecondary};
    }
    h3 {
      font-weight: 600;
    }
    .card {
      background: ${theme.colors.card.background};
      color: ${theme.colors.card.text};
      min-height: 3rem;
      border-radius: 10px;
      padding: 15px;
      &.job {
        padding: 2rem;
        @media (max-width: 768px) {
        }
        @media (max-width: 425px) {
          padding: 1rem;
        }
      }
    }
    .card-text-muted {
      color: ${theme.colors.card.textMuted};
    }
    .card-footer {
      color: ${theme.colors.card.textSecondary};
      font-weight: 600;
    }

    .button {
      border-radius: 5px;
      font-size: 1rem;
      padding: 0.7rem 1rem;
      cursor: pointer;
      min-width: 9rem;
      &.default {
        background-color: ${theme.colors.button.background};
        color: ${theme.colors.button.text};
        border: 1px solid ${theme.colors.button.border};
      }
      &.light {
        background-color: ${theme.colors.buttonSecondary.background};
        color: ${theme.colors.buttonSecondary.text};
        border: 1px solid ${theme.colors.buttonSecondary.border};
      }
    }
    .footer {
      background: ${theme.colors.card.background};
      margin-top: 3rem;
      position: sticky;
      bottom: 0;
      &.job {
      }
      @media (max-width: 768px) {
      }
      @media (max-width: 425px) {
        margin-top: 1rem;
      }
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
    .flex-center-items {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .bold {
      font-weight: 400;
    }
    .bolder {
      font-weight: 600;
    }
    .boldest {
      font-weight: 800;
    }
  `;
};

const GlobalStyles: React.FC<Props> = ({ theme }) => {
  return <Global styles={createStyles(theme)} />;
};

export default GlobalStyles;
