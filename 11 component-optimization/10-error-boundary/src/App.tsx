import { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
const ChildA = lazy(() => import("./components/ChildA"));
const ChildB = lazy(() => import("./components/ChildB"));

function Fallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>retry</button>
    </div>
  );
}

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
      {isShow && (
        <>
          <Suspense fallback={<h1>ChildA Loading..</h1>}>
            <ChildA />
          </Suspense>
          <ErrorBoundary FallbackComponent={Fallback}>
            <Suspense fallback={<h1>ChildB Loading..</h1>}>
              <ChildB />
            </Suspense>
          </ErrorBoundary>
        </>
      )}
    </>
  );
}
