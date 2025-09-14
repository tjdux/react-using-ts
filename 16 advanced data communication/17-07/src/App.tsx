import { Suspense } from "react";
import { axiosInstance } from "./api/axios";
import Posts from "./components/Posts";

async function fetchPosts() {
  const { data } = await axiosInstance.get("/posts222");
  return data; // Promise 객체
}
export default function App() {
  return (
    <>
      <Suspense fallback={<p>Loading..</p>}>
        <Posts promise={fetchPosts()} />
      </Suspense>
    </>
  );
}
