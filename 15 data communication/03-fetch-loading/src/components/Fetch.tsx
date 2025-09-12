import { useEffect, useState } from "react";
interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function Fetch() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPosts(data))
      .finally(() => setIsLoading(false));
  }, []);

  // if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h3>Fetch</h3>
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        )}
      </ul>
    </>
  );
}
