import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";

export async function getPosts() {
  const contentDir = path.join(process.cwd(), "src/content");

  try {
    const posts = await getPostData(contentDir, [".mdx", ".md"]);
    return posts;
  } catch (error) {
    console.error("Error during posts data generation:", error);
    return [];
  }
}

export async function getPostData(dir: any, extensions = [".mdx"]) {
  try {
    const files = await fs.readdir(dir);
    let posts: any[] = [];

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        const nestedPosts = await getPostData(filePath, extensions);
        posts = posts.concat(nestedPosts);
      } else if (extensions.some((ext) => path.extname(file) === ext)) {
        const fileContent = await fs.readFile(filePath, "utf8");

        const { data: frontmatter, content } = matter(fileContent); // content 추가

        const slug = path.relative(
          path.join(process.cwd(), "src/content"),
          path.join(dir, path.basename(file, path.extname(file)))
        );

        posts.push({
          slug,
          ...frontmatter,
          content, // 컨텐츠 추가
        });
      }
    }

    return posts;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}

export async function getPostBySlug(slug: any) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
