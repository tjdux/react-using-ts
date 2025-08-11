export default function PrintValue(props: PrintValueProps) {
  console.log(props);
  return (
    <>
      <p>number: {props.primitiveNumber}</p>
      <p>string: {props.primitiveString}</p>
      <p>boolean: {props.primitiveBoolean.toString()}</p>
      <p>array: {props.referenceArr}</p>
      <p>obj: {JSON.stringify(props.referenceObject)}</p>
      <p>function: {props.handleClick.toString()}</p>
    </>
  );
}
