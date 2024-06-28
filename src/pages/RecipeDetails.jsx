import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe, fetchRecipes } from "/utils";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      setLoading(true);

      const data = await fetchRecipe(id);

      setRecipe(data);
      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loading className="dots-container " />
      </div>
    );
  }
  return (
    <div className="w-full">
      <Header title={recipe?.label} image={recipe?.image} />
      <div className=" w-full relative top-[100vh] flex justify-center bg-black md:border-r border-slate-800 pr-1">
        <div className=" flex flex-col gap-5">
          <p className="text-white w-[100vw] text-center text-2xl underline decoration-red-500">
            Ingredients
          </p>
          <div className="mx-auto">
          {recipe?.ingredientLines?.map((ingredient, index) => (
            <p key={index} className="text-neutral-100 flex gap-2 mx-8">
              &rarr; {ingredient}
            </p>
          ))}
          </div>
        </div>
      </div>
      <div className="mt-6 relative top-[100vh] text-center flex justify-center">
        <div>
          <p className="text-white text-2xl underline decoration-red-500">
            Recipe Image
          </p>
          <img
            src={recipe?.image}
            alt="Recipe"
            className="mt-2 rounded-lg shadow-xl"
            style={{ maxWidth: "10000px", maxHeight: "400px" }}
          />
        </div>
      </div>
      <Footer className="text-white text-center relative top-[100vh]"/>
    </div>
  );
}

export default RecipeDetails;
