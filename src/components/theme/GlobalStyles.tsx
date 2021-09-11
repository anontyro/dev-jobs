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

    .header-content {
      label {
        display: flex;
        justify-content: center;
        align-items: center;
        .theme-toggle {
          margin: auto 1rem;
        }
      }
    }

    .search-icon {
      font-size: 1.4rem;
      margin-right: 0.5rem;
    }

    .input-full {
      background-color: unset;
      border: unset;
      font-size: 1.2rem;
      color: ${theme.colors.textSecondary};
    }
    .input-full:focus-visible {
      outline: none;
      border-bottom: 1px solid ${theme.colors.button.border};
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

    .react-toggle {
      touch-action: pan-x;

      display: inline-block;
      position: relative;
      cursor: pointer;
      background-color: transparent;
      border: 0;
      padding: 0;

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
    }

    .react-toggle-screenreader-only {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    .react-toggle--disabled {
      cursor: not-allowed;
      opacity: 0.5;
      -webkit-transition: opacity 0.25s;
      transition: opacity 0.25s;
    }

    .react-toggle-track {
      width: 50px;
      height: 24px;
      padding: 0;
      border-radius: 30px;
      background-color: #4d4d4d;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
      background-color: #000000;
    }

    .react-toggle--checked .react-toggle-track {
      background-color: #19ab27;
    }

    .react-toggle--checked:hover:not(.react-toggle--disabled)
      .react-toggle-track {
      background-color: #128d15;
    }

    .react-toggle-track-check {
      position: absolute;
      width: 14px;
      height: 10px;
      top: 0px;
      bottom: 0px;
      margin-top: auto;
      margin-bottom: auto;
      line-height: 0;
      left: 8px;
      opacity: 0;
      -webkit-transition: opacity 0.25s ease;
      -moz-transition: opacity 0.25s ease;
      transition: opacity 0.25s ease;
    }

    .react-toggle--checked .react-toggle-track-check {
      opacity: 1;
      -webkit-transition: opacity 0.25s ease;
      -moz-transition: opacity 0.25s ease;
      transition: opacity 0.25s ease;
    }

    .react-toggle-track-x {
      position: absolute;
      width: 10px;
      height: 10px;
      top: 0px;
      bottom: 0px;
      margin-top: auto;
      margin-bottom: auto;
      line-height: 0;
      right: 10px;
      opacity: 1;
      -webkit-transition: opacity 0.25s ease;
      -moz-transition: opacity 0.25s ease;
      transition: opacity 0.25s ease;
    }

    .react-toggle--checked .react-toggle-track-x {
      opacity: 0;
    }

    .react-toggle-thumb {
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      position: absolute;
      top: 1px;
      left: 1px;
      width: 22px;
      height: 22px;
      border: 1px solid #4d4d4d;
      border-radius: 50%;
      background-color: #fafafa;

      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;

      -webkit-transition: all 0.25s ease;
      -moz-transition: all 0.25s ease;
      transition: all 0.25s ease;
    }

    .react-toggle--checked .react-toggle-thumb {
      left: 27px;
      border-color: #19ab27;
    }

    .react-toggle--focus .react-toggle-thumb {
      -webkit-box-shadow: 0px 0px 3px 2px #0099e0;
      -moz-box-shadow: 0px 0px 3px 2px #0099e0;
      box-shadow: 0px 0px 2px 3px #0099e0;
    }

    .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
      -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
      -moz-box-shadow: 0px 0px 5px 5px #0099e0;
      box-shadow: 0px 0px 5px 5px #0099e0;
    }
  `;
};

const GlobalStyles: React.FC<Props> = ({ theme }) => {
  return <Global styles={createStyles(theme)} />;
};

export default GlobalStyles;
