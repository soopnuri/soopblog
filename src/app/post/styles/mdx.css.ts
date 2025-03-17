import { style, globalStyle } from "@vanilla-extract/css";

export const h1 = style({
  color: "red",
  fontSize: "3.6rem",
  fontWeight: "700",
  lineHeight: "2.2",
});

export const h2 = style({
  fontSize: "2.4rem",
  lineHeight: "2",
  fontWeight: "700",
  marginTop: "2.8rem",
});

export const blockquote = style({
  "::before": {
    content: '"\\201C"',
    fontSize: "3em",
    fontFamily: "Georgia",
    color: "#bcbcbc",
    float: "left",
    margin: "-5px 10px 0px -10px",
  },
  margin: "0 0 1.2rem 1rem",
  padding: "1rem 1.4rem",
});

export const strong = style({
  fontWeight: "600",
});

export const ul = style({
  marginLeft: "1.8rem",
});

globalStyle(`p`, {
  lineHeight: 1.8,
});
globalStyle(`li`, {
  lineHeight: 1.4,
});
globalStyle(`[data-highlighted-line]`, {
  backgroundColor: "#2e3a5091",
});
