export default function User({ name, age }: { name: string; age: number }) {
  return (
    <>
      <div>
        <p>name: {name}</p>
        <p>age: {age}</p>
      </div>
    </>
  );
}
