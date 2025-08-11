import User from "./components/User";
import PrintValue from "./components/PrintValue";
import Button from "./components/ui/Button";

export default function App() {
  // 기본 자료형
  const primitiveString = "Hello, World";
  const primitiveNumber = 42;
  const primitiveBoolean = false;
  const primitiveUndefined = undefined;
  const primitiveNull = null;
  const primitiveSymbol = Symbol("mySymbol");
  const primitiveBigInt = 68516135183156;

  // 참조 자료형
  const referenceArr = [1, 2, 3, 4];
  const referenceObject = { name: "John", age: 30 };
  // 객체는 표현식으로 출력 불가능
  const referenceFunction = () => "함수의 리턴 값";
  const referenceDate = new Date();
  const referenceRegExp = /react/i;
  const referenceMap = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
  ]);
  const referenceSet = new Set([1, 2, 3, 4]);

  const handleClick = () => alert("버튼이 클릭되었습니다!");

  const userObj = {
    name: "Jack",
    age: 20,
  };

  return (
    <>
      <h1>기본 자료형 출력</h1>
      <p>문자열: {primitiveString}</p>
      <p>숫자: {primitiveNumber}</p>
      <p>논리형: {primitiveBoolean.toString()}</p>
      <p>undefined: {String(primitiveUndefined)}</p>
      <p>null: {String(primitiveNull)}</p>
      <p>symbol: {String(primitiveSymbol)}</p>
      <p>bigInt: {primitiveBigInt}</p>
      <h1>참조 자료형 출력</h1>
      <p>배열: {referenceArr}</p>
      {/* <p>객체: {referenceObject}</p> */}
      <p>객체: {JSON.stringify(referenceObject)}</p>
      <p>함수: {referenceFunction.toString()}</p>
      <p>날짜: {referenceDate.toString()}</p>
      <p>정규식: {referenceRegExp.toString()}</p>
      <p>Map: {JSON.stringify(Array.from(referenceMap))}</p>
      <p>Set: {JSON.stringify(Array.from(referenceSet))}</p>
      <h1>데이터 전달</h1>
      <User name={"Jack"} age={20} />
      <User name={"Mike"} age={30} />
      <User {...userObj} />
      <PrintValue
        primitiveNumber={primitiveNumber}
        primitiveString={primitiveString}
        primitiveBoolean={primitiveBoolean}
        referenceArr={referenceArr}
        referenceObject={referenceObject}
        handleClick={handleClick}
      />
      <Button>Login</Button>
    </>
  );
}
