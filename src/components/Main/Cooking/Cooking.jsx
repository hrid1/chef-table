import PropTypes from "prop-types";

const Cooking = ({ cooking, count}) => {
  console.log(cooking);
  return (
    <div>
      <div className="bg-white rounded-md py-4">
        <h3 className="text-2xl font-semibold">Want to cook: 01</h3>
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
              {/* row 1 */}
              {/* <tr>
                <th>1</th>
                <td>Quality Control Specialist</td>
                <td>30 minutes</td>
                <td>400 calories</td>
                <td>
                  <button className="bg-prime py-1 px-2 rounded-full">
                    Preparing
                  </button>
                </td>
              </tr> */}

              {cooking.map((cook, idx) => (
                <tr key={idx}>
                  <th>{idx+1}</th>
                  <td>{cook.recipe_name}</td>
                  <td>{cook.preparing_time}</td>
                  <td>{cook.calories}</td>
                  <td>
                    <button className="bg-prime py-1 px-2 rounded-full">
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Currently Cooking */}
        <h3 className="text-2xl font-semibold mt-4">Currently cooking: 02</h3>
        <hr className="w-4/5 mx-auto my-4" />
        <table className="table table-auto border-none table-zebra">
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Quality Control Specialist</td>
              <td>30 minutes</td>
              <td>400 calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  cooking: PropTypes.object,
};

export default Cooking;
