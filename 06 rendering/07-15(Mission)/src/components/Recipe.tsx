export default function Recipe({
  id,
  name,
  ingredients,
  onDelete,
}: {
  id: string;
  name: string;
  ingredients: string[];
  onDelete: (id: string) => void;
}) {
  return (
    <>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={() => onDelete(id)}>삭제</button>
    </>
  );
}
