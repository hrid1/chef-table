import PropTypes from "prop-types";
import { useState } from "react";

const Cooking = ({ cooking, setCooking }) => {
  const [current, setCurrent] = useState([]);

  const handleCurentCooking = (item) => {
    setCurrent([...current, item]);
    const newCooking = cooking.filter((cook) => cook !== item);
    setCooking(newCooking);
  };

  // <------------------------Update Total Time and Calories------------------->
  let totalTimes = 0;
  let totalCalories = 0;

  if (current.length > 0) {
    // setTotalTimes();
    totalTimes = current.reduce(
      (sum, curItem) => sum + curItem.preparing_time,
      0
    );
    // setTotalCalories
    totalCalories = current.reduce(
      (sum, curItem) => sum + parseInt(curItem.calories),
      0
    );
  }

  return (
    <div>
      <div className="bg-white rounded-md py-4">
        <h3 className="text-2xl font-semibold text-center">
          Want to cook: {cooking.length}
        </h3>
        <hr className="w-4/5 mx-auto my-4" />

        {/* Want To Cook */}
        <div className="">
          <table className="table table-auto border-none">
            {/* head */}
            <thead>
              <tr className="">
                <th></th>
                <th className="w-full">Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cooking.map((cook, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{cook.recipe_name}</td>
                  <td>{cook.preparing_time} minutes</td>
                  <td>{cook.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleCurentCooking(cook);
                      }}
                      className="bg-prime py-1 px-2 rounded-full font-semibold"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Currently Cooking */}
        <h3 className="text-2xl font-semibold text-center mt-4">
          Currently cooking: {current.length}
        </h3>
        <hr className="w-4/5 mx-auto my-4" />
        <table className="table table-auto border-none ">
          {/* head */}
          <thead>
            <tr className="">
              <th></th>
              <th className="w-[40%]">Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {current.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time} minutes</td>
                <td>{item.calories}</td>
              </tr>
            ))}

            <tr className="bg-orange-100 font-semibold">
              <th></th>
              <td>Total: </td>
              <td>{totalTimes} minutes</td>
              <td>{totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  cooking: PropTypes.array,
  setCooking: PropTypes.func,
};

export default Cooking;
