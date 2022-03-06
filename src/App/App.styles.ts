import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
    
    html, body {
        width: 100%;
        height: 100%;
    }
`;