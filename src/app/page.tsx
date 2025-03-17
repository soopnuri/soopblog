import Post from "./post/_components/Post";
import { getPosts } from "./post/_utils/posts";
import * as styles from './style.css';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Post posts={posts} />
    </main>
  );
}
