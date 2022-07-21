import styled from "styled-components";

const pixelToRem = (size) => `${size / 16}rem`;

const color = {
    primary: "#0dcaf0",
    secondary: "#0d6efd",
    white: "#ffffff",
    black: "#000000",
    sectionBg: "#f0f8ff",
    navBg: "#ffffff",
    pColor: "#717275",
};

const fontSize = {
    h1: "55px",
    h2: "48px",
    h3: "36px",
    h4: "32px",
    h5: "24px",
    h6: "22px",
    p: "18px",
    btn: "18px",
    navBr: "20px",
    navMn: "16px",
};

const fontWeight = {
    light: '100',
    normal: '300',
    medium: '400',
    bold: '500',
    bbold: '700',
}

const theme = {
    color,
    fontSize,
    fontWeight,
};

export default theme;