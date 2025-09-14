import axios from "axios";
import { useEffect, useState, useTransition } from "react";

interface Post {
  id: number;
  title: string;
  views: number;
}
export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const { data } = await axios.get("http://localhost:3000/posts");
      setPosts(data);
    });
  }, []);

  if (isPending) return <h3>loading..</h3>;
  return (
    <>
      <h3>useTransition</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
