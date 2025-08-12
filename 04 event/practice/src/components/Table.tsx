export default function Table() {
  return (
    <>
      <table border={1} onClick={() => console.log("table")}>
        <tbody onClick={() => console.log("tbody")}>
          <tr onClick={() => console.log("tr")}>
            <td
              onClick={() => {
                console.log("td");
              }}
            >
              Mike
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
