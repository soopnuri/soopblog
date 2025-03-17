import { MDXComponents } from "mdx/types";
import * as styles from "./mdx.css";

const withClassName =
  (Component: React.ElementType, className: string) =>
  ({ children }: { children: React.ReactNode }) =>
    <Component className={className}>{children}</Component>;

export const overrideMdxComponents: MDXComponents = {
  h1: withClassName("h1", styles.h1),
  h2: withClassName("h2", styles.h2),
  strong: withClassName("strong", styles.strong),
  ul: withClassName("ul", styles.ul),
  blockquote: withClassName("blockquote", styles.blockquote),
};
