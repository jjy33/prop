import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --white-color:                  #ffffff;
        --primary-color:                #0dcaf0;
        --secondary-color:              #0d6efd;
        --section-bg-color:             #f0f8ff;
        --dark-color:                   #000000;
        --navbar-bg-color:              #ffffff;
        --p-color:                      #717275;
        --highlight-icon-color:         #ff0100;
    
        --body-font-family:             'Noto Sans KR', sans-serif;
    
        --h1-font-size:                 55px;
        --h2-font-size:                 48px;
        --h3-font-size:                 36px;
        --h4-font-size:                 32px;
        --h5-font-size:                 24px;
        --h6-font-size:                 22px;
        --p-font-size:                  18px;
        --menu-font-size:               16px;
        --copyright-text-font-size:     16px;
        --btn-font-size:                18px;
    
        --font-weight-light:            100;
        --font-weight-normal:           300;
        --font-weight-medium:           400;
        --font-weight-bold:             500;
        --font-weight-bbold:            700;
    }
    
    body {
        background: var(--white-color);
        font-family: var(--body-font-family) !important; 
    }
    
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: var(--dark-color);
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: var(--font-weight-bold);
        letter-spacing: -1px;
    }
    
    h1 {
        font-size: var(--h1-font-size);
        letter-spacing: -2px;
        text-transform: uppercase;
    }
    
    h2 {
        font-size: var(--h2-font-size);
        letter-spacing: -2px;
    }
    
    h3 {
        font-size: var(--h3-font-size);
    }
    
    h4 {
        font-size: var(--h4-font-size);
    }
    
    h5 {
        font-size: var(--h5-font-size);
        font-weight: var(--font-weight-medium);
        line-height: normal;
    }
    
    h6 {
        font-size: var(--h6-font-size);
    }
    
    p {
        color: var(--p-color);
        font-size: var(--p-font-size);
        font-weight: var(--font-weight-normal);
    }
    
    ul li {
        color: var(--p-color);
        font-size: var(--p-font-size);
        font-weight: var(--font-weight-normal);
    }
    
    a, 
    button {
        touch-action: manipulation;
        transition: all 0.3s;
    }
    
    a {
        color: var(--p-color);
        text-decoration: none;
    }
    
    a:hover {
        color: var(--primary-color);
    }
    
    ::selection {
        background: var(--primary-color);
        color: var(--white-color);
    }
    
    ::-moz-selection {
        background: var(--primary-color);
        color: var(--white-color);
    }
    
    b,
    strong {
        font-weight: var(--font-weight-bold);
    }
`;

export default GlobalStyle;