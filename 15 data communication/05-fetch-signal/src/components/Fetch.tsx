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
    // 데이터 요청 취소
    const controller = new AbortController();
    setIsLoading(true);
    setError("");
    fetch("http://localhost:3000/posts", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("네트워크 통신 오류");
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((e) => {
        if (e instanceof Error && e.name !== "AbortError") setError(e.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

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
