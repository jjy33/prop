import styled from "styled-components";

const pixelToRem = (size) => `${size / 16}rem`;

const colors = {
    primary: "#0dcaf0",
    secondary: "#0d6efd",
    white: "#ffffff",
    black: "#000000",
    sectionBg: "#f0f8ff",
    navBg: "#ffffff",
    pColor: "#717275",
}

const fontSizes = {
    h1: "55px",
    h2: "48px",
    h3: "36px",
    h4: "32px",
    h5: "24px",
    h6: "22px",
    p: "18px",
    btn: "18px",
};

const common = {
    flexCenter: `
        display: flex;
        justify-contents: centers;
        align-items: center;
    `,
    flexCenterColumn: `
        display: flex;
        flex-direction: columns;
        justify-contents: center;
        align-items: center;
    `
};

const theme = {
    colors,
    fontSizes,
    common,
};

export default theme;