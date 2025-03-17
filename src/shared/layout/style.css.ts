import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const h1 = style({
  cursor: "pointer",

  position: "relative",
  textDecoration: "none",
  color: "black",

  backgroundColor: "#fff",
  padding: "0.6rem 0.8rem",
  borderRadius: "1.4rem",
});
export const button = style({
  border: "none",
  cursor: "pointer",
  padding: "0.6rem 0.8rem",

  position: "relative",
  textDecoration: "none",
  color: "black",
});

export const footer = style({
  height: "4rem",
});

// GNB
const gnbWrapper = style({
  position: "fixed",
  top: "0rem",
  zIndex: 100,
  maxWidth: "528px",
  width: "100%",
  padding: "2.2rem 2rem",
  borderLeft: `1px solid ${vars.color.gray_200}`,
});

const gnbBase = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 0rem",
  width: "100%",
});

const gnbExpanded = style({});

const gnbCollapsed = style({
  width: "100px",
});

const collapseButton = style({
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});

const gnbContent = style({
  display: "flex",
  width: "1000px", // 전체 너비 유지
  transition: "transform 0.3s ease-in-out",
  position: "relative", // Added position relative
  left: 0, // 초기 위치 설정
});

const gnbContentCollapsed = style({
  transform: "translateX(-900px)", // 왼쪽으로 900px 이동 (1000px - 100px)
});

const navBox = style({
  display: "flex",
  gap: "1rem",
  backgroundColor: vars.color.gray_100,
  padding: "0.3rem",
  borderRadius: "1.4rem",
});

const gnbActive = style({
  backgroundColor: "#fff",
  borderRadius: "1.4rem",
});

export const gnbStyles = {
  wrapper: gnbWrapper,
  base: gnbBase,
  navBox: navBox,
  active: gnbActive,
  expanded: gnbExpanded,
  collapsed: gnbCollapsed,
  collapseButton: collapseButton,
  gnbContent: gnbContent,
  gnbContentCollapsed: gnbContentCollapsed,
};
