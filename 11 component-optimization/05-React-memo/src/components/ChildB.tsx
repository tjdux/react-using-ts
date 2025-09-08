import ChildC from "./ChildC";

export default function ChildB() {
  console.log("ChildB");
  return (
    <>
      <h1>ChildB Component</h1>
      <ChildC />
    </>
  );
}
