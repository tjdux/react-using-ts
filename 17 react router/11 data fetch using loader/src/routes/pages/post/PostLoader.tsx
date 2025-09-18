import { useLoaderData } from "react-router";

interface Post {
  id: number;
  title: string;
  views: number;
}

export default function PostLoader() {
  const posts: Post[] = useLoaderData();
  // 비동기 처리가 일어난 후에 페이지 전환 ➡️ 빈배열 깜빡이는 것은 보이지 않지만 페이지 전환은 오래걸림
  return (
    <>
      <h1>PostLoader Component</h1>
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
}
