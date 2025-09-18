import { useParams } from "react-router";

export default function Post() {
  const { id, detail = "ko" } = useParams();
  console.log(detail);
  return (
    <>
      <h1>Post: {id}</h1>
    </>
  );
}
