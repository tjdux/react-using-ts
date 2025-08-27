import sample from "./assets/images/sample.jpg";

export default function App() {
  return (
    <>
      <div className="bg"></div>
      <div className="bg-1"></div>
      <div className="bg-[url(https://cdn.pixabay.com/photo/2023/12/06/14/39/snow-8433815_1280.jpg)] w-[400px] h-[400px]"></div>
      <div className="bg-[url(/sample.jpg)] h-[400px] w-[400px]"></div>
      {/* <div className={`bg-[url(${sample})] h-[400px] w-[400px]`}></div> */}
      <div
        className="h-[300px] w-[400px]"
        style={{ backgroundImage: `url(${sample})` }}
      ></div>
    </>
  );
}
