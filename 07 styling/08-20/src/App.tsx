import sample from "./assets/images/sample.jpg";
export default function App() {
  return (
    <>
      <img src="/images/sample.jpg" alt="bicycle" />
      <img src={sample} alt="bicycle" />
    </>
  );
}
