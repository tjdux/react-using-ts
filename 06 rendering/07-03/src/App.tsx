import StatusMessage from "./components/StatusMessage";

export default function App() {
  const status = "success";

  return (
    <>
      <StatusMessage status={status} />
    </>
  );
}
