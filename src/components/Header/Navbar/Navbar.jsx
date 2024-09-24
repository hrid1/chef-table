import { FaRegUserCircle } from "react-icons/fa";
import { SiCodechef, SiIfood } from "react-icons/si";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/recipes">Recipes</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-yellow-50">
        <div className="navbar-start w-full ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <p className="text-md md:text-3xl font-bold flex md:gap-2 items-center  w-full">
            <SiIfood className="bg-prime p-1 m-1 text-2xl md:text-4xl rounded-lg " />
            Recipe Calories
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto mr-4 bg-gray-200 border-none hidden md:block"
          />
          <a className="">
            <div className="border rounded-full flex items-center justify-center bg-prime md:p-2">
              <FaRegUserCircle className="text-3xl " />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
