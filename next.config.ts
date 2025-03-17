import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["next-mdx-remote"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withVanillaExtract(withMDX(nextConfig));
