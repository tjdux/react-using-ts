import { useEffect, useState } from "react";

export default function Fetch() {
  const [posts, setPosts] = useState<
    {
      id: number;
      title: string;
      views: number;
    }[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h3>Fetch</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
