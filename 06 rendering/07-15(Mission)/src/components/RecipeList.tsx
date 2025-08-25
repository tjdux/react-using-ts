import { useState } from "react";
import { initialRecipes } from "../data/initialData";
import Recipe from "./Recipe";

export default function RecipeList() {
  const [recipes, setRecipes] = useState(initialRecipes);

  const handleDelete = (id: string) => {
    setRecipes((recipes) => recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} onDelete={handleDelete} />
      ))}
    </>
  );
}
