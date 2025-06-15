import { useState } from "react";
import UseStore from "../store/UseStore";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}

const RecipeApp = () => {
  const { recipes, addRecipe, removeRecipe } = UseStore();
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [editing, setEditing] = useState<Recipe | null>(null);

  const handleAdd = () =>{
    if(name.trim()===''||ingredients.trim()===''||instructions.trim()==='')
      return;

    addRecipe({
      id: Date.now(),
      name,
      ingredients: ingredients.split(',').map((i) =>(i.trim())),
      instructions
    });

    setName("");
    setIngredients("");
    setInstructions("");
  }

  const handleEdit=(recipe:Recipe)=>{
         setEditing(recipe);
         setName(recipe.name);
         setIngredients(recipe.ingredients.join(','));
         setInstructions(recipe.instructions);
  }

  const handleUpdate =()=>{
    if(name.trim()===''||ingredients.trim()===''||instructions.trim()==='')
      return;
   if(editing){
    removeRecipe(editing.id);
     addRecipe({
      id: editing.id,
      name,
      ingredients: ingredients.split(',').map((i) =>(i.trim())),
      instructions
    });
    setEditing(null);
   }
    setName("");
    setIngredients("");
    setInstructions("");
  }
  const handleCancle =()=>{
    setEditing(null);
    setName("");
    setIngredients("");
    setInstructions("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          Recipe Book
        </h1>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={name}
            placeholder="Recipe Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            value={ingredients}
            placeholder="Ingredients(commas seprated) eg:mike,eggs"
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            value={instructions}
            placeholder="instruction"
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex justify-between">
            {editing ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
                >
                  Upadate
                </button>
                 <button
                  onClick={handleCancle}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
                >
                  Cancle
                </button>
              </>
            ) : (
              <>
               <button
                  onClick={handleAdd}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
                >
                  Add Recipe
                </button>
              </>
            )}


          </div>
        </div>
        <ul className="space-y-4">
          {recipes.map((recipe)=>(
             <li
              key={recipe.id}
              className="p-4 bg-green-50 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                {recipe.name}
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(recipe)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeRecipe(recipe.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeApp;
