import { isRouteErrorResponse, useRouteError } from "react-router";

export default function PostError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.data.message}</h2>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>알 수 없는 에러</h1>
        <h2>{error.message}</h2>
      </div>
    );
  } else {
    return (
      <>
        <h1>Error!</h1>
      </>
    );
  }
}
