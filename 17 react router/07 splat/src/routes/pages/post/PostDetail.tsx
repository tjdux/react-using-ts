import { useParams } from "react-router";

export default function PostDetail() {
  const { id, detail } = useParams();
  console.log(id, detail);
  return (
    <>
      <h1>
        PostDetail: {id} / {detail}
      </h1>
    </>
  );
}
