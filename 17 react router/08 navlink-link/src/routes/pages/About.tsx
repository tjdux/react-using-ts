import { useParams } from "react-router";

export default function About() {
  const { locale = "ko" } = useParams();
  return (
    <>
      <h1>About Component: {locale}</h1>
    </>
  );
}
