import { vars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#fafaf9",
  height: "100vh",
  paddingTop: "10rem",
  overflowY: "scroll",
});
export const main = style({
  width: "100%",
  maxWidth: "528px",
});
