import { globalStyle, style } from "@vanilla-extract/css";
import { font } from "./theme.css";

// 각 브라우저별 css reset

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontWeight: 400,
});

globalStyle("html, *", {
  fontSize: "10px",
});

globalStyle("body, *", {
  fontSize: "1.6rem",
  fontFamily: font,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

export const button = style({
  position: "relative",
  // 기타 버튼 기본 스타일
});

globalStyle(`button:hover::after`, {
  content: '""',
  position: "absolute",
  left: 0,
  bottom: "-3px",
  width: "100%",
  height: "1px",
  backgroundColor: "black",
});
