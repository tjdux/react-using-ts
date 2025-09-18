import { useParams } from "react-router";

export default function Post() {
  const { postId } = useParams();

  return (
    <>
      <h1>Post Component: {postId}</h1>
    </>
  );
}
