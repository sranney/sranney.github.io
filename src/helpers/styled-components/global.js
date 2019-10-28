import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-weight: bold;
        padding: 0;
        font-size: 16px;
        min-height: 100vh;
        
        &.dark {
            background: url(https://mylearningposts-api.herokuapp.com/images/casey-horner-XE2RmuV6ed0-unsplash.jpg);
        }
        
        &.light {
            background: url(https://mylearningposts-api.herokuapp.com/images/eberhard-grossgasteiger-5P91SF0zNsI-unsplash.jpg);
        }

        &.dark,
        &.light {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
        }
    }
`;

export default GlobalStyles;