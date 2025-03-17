import path from "path";
import { getPostBySlug, getPostData } from "../_utils/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { overrideMdxComponents } from "../styles/mdx";
import { Metadata } from "next";
import rehypePrettyCode from "rehype-pretty-code";
import { slugContainer } from '../_components/post.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: "Post not found",
      description: "Post not found",
      keywords: [],
      authors: [{ name: "soop" }],
    };
  }
  return {
    title: post.title,
    description: post.desc,
    keywords: post.tags,
    authors: [{ name: "soop" }],
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  const options = {
    theme: "one-dark-pro",
  };

  return (
    <article className={slugContainer}>
      <MDXRemote
        source={post.content}
        components={overrideMdxComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, options]],
          },
        }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/content");

  try {
    const slugs = await getPostData(contentDir, [".mdx"]);
    return slugs;
  } catch (error) {
    console.error("error", error);
    return [];
  }
}

export const dynamicParams = false;
