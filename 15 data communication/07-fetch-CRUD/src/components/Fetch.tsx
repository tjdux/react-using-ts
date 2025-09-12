import { useEffect, useState } from "react";
interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function Fetch() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const fetchPosts = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch("http://localhost:3000/posts", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("네트워크 통신 오류");
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        if (e instanceof Error && e.name !== "AbortError") setError(e.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchPosts();

    return () => controller.abort();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h3>Fetch</h3>
      <ul>
        {isLoading ? (
          <p>Loading... </p>
        ) : (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        )}
      </ul>
    </>
  );
}
