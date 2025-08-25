import Inline from "./components/Inline";

export default function App() {
  const isLoggedIn = true;
  const h1Style = { color: isLoggedIn ? "red" : "blue", fontSize: "25px" };

  return (
    <>
      <h1 style={h1Style}>Inline Style</h1>
      <Inline h1Style={h1Style} />
    </>
  );
}
