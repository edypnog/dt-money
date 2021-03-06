import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --background: #f0f2f5;
    --purple: #5429CC;
    --red: #E52E4D;
    
    --text: #969CB2;
    --titles: ##363F5F;

    --green: #33CC95;
    --light-purple: #6933FF;
    --shape: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; // 15px
    }

  }
  
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-alowed;
  }

  .react-modal-overlay {
    background-color: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .close-modal {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: none;
    background: transparent;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.5);
    }
  }

`
