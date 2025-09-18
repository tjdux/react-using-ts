import { useParams } from "react-router";

export default function PostDetail() {
  const { postId, detailId } = useParams();

  return (
    <>
      <h1>PostDetail Component</h1>
      <p>Post ID: {postId}</p>
      <p>Detail ID: {detailId}</p>
    </>
  );
}
