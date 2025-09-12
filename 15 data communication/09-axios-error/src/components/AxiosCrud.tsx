import axios from "axios";
export default function AxiosCrud() {
  const fetchGet = async () => {
    const { data, status } = await axios.get("http://localhost:3000/posts");
    console.log(data, status);
  };
  const fetchPost = async () => {
    const { data } = await axios.post("http://localhost:3000/posts", {
      title: "a axios data",
      views: 50,
    });
    console.log(data);
  };
  const fetchPut = async () => {
    const { data } = await axios.put("http://localhost:3000/posts/101", {
      title: "a axios modify data",
      views: 100,
    });
    console.log(data);
  };
  const fetchPatch = async () => {
    const { data } = await axios.patch("http://localhost:3000/posts/101", {
      title: "a axios modify data 2",
      views: 40,
    });
    console.log(data);
  };
  const fetchDelete = async () => {
    const { data, status } = await await axios.delete(
      "http://localhost:3000/posts/101"
    );
    console.log(data, status);
  };
  return (
    <>
      <button onClick={fetchGet}>GET</button>
      <button onClick={fetchPost}>POST</button>
      <button onClick={fetchPut}>PUT</button>
      <button onClick={fetchPatch}>PATCH</button>
      <button onClick={fetchDelete}>DELETE</button>
    </>
  );
}
