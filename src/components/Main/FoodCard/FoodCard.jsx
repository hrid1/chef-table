import { FaClock, FaFire } from "react-icons/fa";
import PropTypes from "prop-types";
const FoodCard = ({ recipe, handleToCook}) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  // console.log(handleToCook);

  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-4 h-[640px]">
        <div className="h-56 bg-gray-200 rounded-md">
          <img
            src={recipe_image}
            alt="Shoes"
            className="rounded-xl h-full w-full"
          />
        </div>
        <div className="card-body p-0 text-left flex flex-col justify-between">
          <div className="border-b-2">
            <h2 className="card-title py-4">{recipe_name}</h2>
            <p className="pb-2 text-gray-500">{short_description}</p>
          </div>
          {/* ingredients */}
          <div className="">
            <h2 className="text-xl font-semibold pb-2">Ingredients</h2>
            <ul className="list-disc ps-5 text-gray-500">
              {/* <li>500g ground beef</li> */}
              {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* want to cook */}
          <div className="mt-2 border-t-2 pt-2">
            <div className="flex">
              <p className="flex items-center gap-2">
                <FaClock />
                {preparing_time} minutes
              </p>
              <p className="flex items-center gap-2">
                <FaFire />
                {calories}
              </p>
            </div>

            <button onClick={() => handleToCook(recipe)} className="btn mt-4 bg-prime">Want to cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  recipe: PropTypes.object,
  handleToCook: PropTypes.func,
};

export default FoodCard;
