import React from "react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import RecipeCards from "./RecipeCards";
import { fetchRecipes } from "/utils";
import Button from "./Button";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);
  const [loading, setLaoding] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit });

      setRecipes(data);

      setLaoding(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLaoding(false);
    }
  };

  const handleSearchedRecipe = async (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
    fetchRecipe();
  };

  useEffect(() => {
    setLaoding(true);

    fetchRecipe();
  }, []);

  if (loading) {
    return <Loading className="dots-container relative top-[100vh]"/>;
  }
  return (
    <div>
      <div id="recipes" className="relative top-[100vh] w-full flex items-center bg-[#000000] justify-center pt-10 pb-5 px-0 md:px-10">
        <SearchBar
          placeholder="eg. Cake, Vegan, Chicken"
          handleInputChange={handleChange}
          searchRecipe={handleSearchedRecipe}
        />
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full flex justify-center">
            <div className="max-w-screen-lg w-full px-4 lg:px-10 py-10">
              <div className="mt-[100vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {recipes?.map((item, index) => (
                  <RecipeCards recipe={item} key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-black flex w-full items-center justify-center py-10">
            <Button
              title="Show More"
              containerStyle="bg-red-500 text-white px-5 py-2 rounded-full text-sm"
              handleClick={showMore}
            />
          </div>
        </>
      ) : (
        <div className="text-white w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}
    </div>
  );
}

export default Recipes;
