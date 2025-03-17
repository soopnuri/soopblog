import { vars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";
export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "0 2rem",
  borderLeft: `1px solid ${vars.color.gray_200}`,
});

// post 스타일 먼저 정의
export const post = style({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1rem",
  cursor: "pointer",
});

// title 스타일에서 post hover 상태를 참조
export const title = style({
  position: "relative",
  textDecoration: "none",
  color: "black",

  selectors: {
    [`${post}:hover &::after`]: {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: "-3px",
      width: "100%",
      height: "1px",
      backgroundColor: "black",
    },
  },
});

export const slugContainer = style({
  padding: "0 2rem",
  borderLeft: `1px solid ${vars.color.gray_200}`,
})