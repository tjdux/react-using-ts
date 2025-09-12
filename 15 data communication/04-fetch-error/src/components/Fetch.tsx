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
    setIsLoading(true);
    setError("");
    fetch("http://localhost:3000/posts2")
      .then((response) => {
        // 404 error: 존재하지 않는 도메인인 경우 (e.g. "http://localhost:3000/posts2")
        if (!response.ok) throw new Error("네트워크 통신 오류");
        return response.json();
      })
      .then((data) => setPosts(data))
      // failed network error: 도메인 자체가 틀렸을 때 (e.g. "http://localhost222:3000/posts")
      .catch((e) => {
        console.log(e);
        setError(e instanceof Error ? e.message : "unknown error");
      })
      .finally(() => {
        setIsLoading(false);
      });
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
