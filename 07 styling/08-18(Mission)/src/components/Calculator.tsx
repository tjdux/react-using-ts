export default function Calculator() {
  return (
    <>
      <article className="w-[282px] border border-solid border-[#333] bg-[#ccc] p-1">
        <form className="grid grid-cols-[repeat(4, 65px)] auto-rows-[65px] gap-1">
          <input
            type="text"
            name="output"
            className="col-span-4 text-right px-2.5 "
            readOnly
          />
          <input type="button" className=" bg-[red] col-span-3 " value="C" />
          <input type="button" className="operator " value="/" />
          <input type="button" value="2" />
          <input type="button" value="1" />
          <input type="button" value="3" />
          <input type="button" className="operator " value="*" />
          <input type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6" />
          <input type="button" className="operator " value="+" />
          <input type="button" value="7" />
          <input type="button" value="8" />
          <input type="button" value="9" />
          <input type="button" className="operator " value="-" />
          <input type="button" className=" bg-[green] " value="." />
          <input type="button" value="0" />
          <input type="button" className="operator col-span-2 " value="=" />
        </form>
      </article>
    </>
  );
}
