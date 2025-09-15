import { use } from "react";

export default function Posts({
  promise,
}: {
  promise: Promise<
    {
      title: string;
      views: number;
      id: number;
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
