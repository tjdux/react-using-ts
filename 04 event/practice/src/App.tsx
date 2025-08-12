import Button from "./components/Button";
import Button1 from "./components/Button1";
import Button2 from "./components/ui/Button2";
import Button3 from "./components/ui/Button3";
import Table from "./components/Table";

export default function App() {
  const handleClick = (msg: string) => alert(msg);

  const handleClick2 = (
    message: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(message);
    console.log(e);
    e.currentTarget.innerText = message;
  };

  return (
    <>
      <h1>App Component</h1>
      <Button />
      <Button1 handleClick={handleClick} message="Playing!">
        Play Movie
      </Button1>
      <Button1 handleClick={handleClick} message="Uploading!">
        Upload Image
      </Button1>
      <Button2 />
      <Button3 handleClick={handleClick2} />
      <Table />
    </>
  );
}
