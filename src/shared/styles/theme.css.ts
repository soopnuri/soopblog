import { createGlobalTheme, globalFontFace, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  font: {
    text: "1.6rem",
    title: "2.2rem",
  },
  color: {
    primary: "#3182F6",
    //
    gray_100: "#ececec", // terms-background
    gray_200: "#e4e4e4", // text-disabled
    gray_500: "#555555", // text-body
    gray_700: "#1d1d1d", // text-title
  },
  border: {
    border_2: "2"
  }
});

const suit = "SUIT Variable";

globalFontFace(suit, {
  src: 'local("SUIT-Variable.woff2")',
});

export const font = style({
  fontFamily: suit,
});
