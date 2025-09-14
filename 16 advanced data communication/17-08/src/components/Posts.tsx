import { use } from "react";

export default function Posts({
  promise,
}: {
  promise: Promise<
    {
      id: number;
      title: string;
      views: number;
    }[]
  >;
}) {
  const posts = use(promise);
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
