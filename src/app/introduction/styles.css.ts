import { vars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";
export const container = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.4rem",

  padding: "0 2rem",
  borderLeft: `1px solid ${vars.color.gray_200}`,
});
