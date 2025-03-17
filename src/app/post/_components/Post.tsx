"use client";
import { useRouter } from "next/navigation";
import * as styles from "./post.css";

const Post = ({ posts }: any) => {
  const router = useRouter();
  const moveToPost = (slug: string) => {
    router.push(`/post/${slug}`);
  };
  return (
    <section className={styles.container}>
      {posts.map((post: any) => (
        <article
          key={post.slug}
          className={styles.post}
          onClick={() => moveToPost(post.slug)}
        >
          <span className={styles.title}>{post.title}</span>
          <span>{post.date}</span>
        </article>
      ))}
    </section>
  );
};

export default Post;
