import { useEffect, useState } from "react";
import Cooking from "../Cooking/Cooking";
import FoodCard from "../FoodCard/FoodCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cooking, setCooking] = useState([]);

  // load data
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  //cooking item
  let count = 0;
  const handleToCook = (cookingItem) => {
    // console.log(itemId);
    if (cooking.includes(cookingItem)) {
      alert("ALready Added");
    } else {
      setCooking([...cooking, cookingItem]);
    }
    count+=1;
  };

  console.log(recipes.length, cooking.length);

  return (
    <div>
      <div className="md:w-4/5 mx-auto">
        <h2 className="text-3xl font-bold">Our Recipes</h2>
        <p className="my-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>

      {/* Recipes Card */}

      <section className="flex flex-col md:flex-row gap-4 bg-yellow-50 py-4 px-2 rounded-md">
        {/* food item */}
        <div className="md:w-3/5 grid grid-cols-2 gap-4">
          {recipes.map((recipe, idx) => (
            <FoodCard
              key={idx}
              recipe={recipe}
              handleToCook={handleToCook}
            ></FoodCard>
          ))}
        </div>

        {/* order info */}
        <div className="md:w-2/5">
          <Cooking cooking={cooking} count={count}></Cooking>
        </div>
      </section>
    </div>
  );
};

export default Recipes;
