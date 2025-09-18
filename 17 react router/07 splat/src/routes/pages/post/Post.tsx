import { useParams } from "react-router";

export default function Post() {
  const { "*": splat } = useParams();

  return (
    <>
      <h1>Post</h1>
      <p>splat: {splat}</p>
    </>
  );
}
