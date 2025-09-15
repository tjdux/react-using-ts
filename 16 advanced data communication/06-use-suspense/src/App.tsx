import { Suspense } from "react";
import { axiosInstance } from "./api/axios";
import Posts from "./components/Posts";

async function fetchData() {
  const { data } = await axiosInstance.get("/posts");
  return data; // Promise 객체 리턴
}

export default function App() {
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Posts promise={fetchData()} />
      </Suspense>
    </>
  );
}
