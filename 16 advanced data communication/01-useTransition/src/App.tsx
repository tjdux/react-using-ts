import { useEffect, useState, useTransition } from "react";
import axios from "axios";

type Post = {
  title: string;
  views: number;
  id: number;
};

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const { data } = await axios.get(" http://localhost:3000/posts");
      setPosts(data);
    });
  }, []);

  if (isPending) return <h3>loading...</h3>;

  return (
    <>
      <h1>useTransition</h1>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
}
