export default function App() {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn && <h1>Welcome Back!</h1>}
      {!isLoggedIn && <h1>Please Sign Up!</h1>}
    </>
  );
}
