import { Suspense } from "react";
import { axiosInstance } from "./api/axios";
import Posts from "./components/Posts";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Error";
import Loading from "./components/Loading";

async function fetchPosts() {
  const { data } = await axiosInstance.get("/posts");
  return data; // Promise 객체
}
export default function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loading />}>
          <Posts promise={fetchPosts()} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
