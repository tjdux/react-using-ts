import { useLoaderData } from "react-router";

interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function PostLoader() {
  const posts: Posts[] = useLoaderData();
  return (
    <>
      <h1>PostLoader Component</h1>
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
}
