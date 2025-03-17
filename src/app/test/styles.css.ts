import { globalStyle, style } from "@vanilla-extract/css";
export const container = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.4rem",
});

export const card = style({});

export const test1 = style({
  width: "20rem",
  height: "18rem",
});

globalStyle(`${container} div`, {
  borderRadius: "1rem",
  padding: "1rem",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
});

export const test2 = style({
  width: "28rem",
  height: "18rem",
  backgroundColor: "lightgreen",
});
