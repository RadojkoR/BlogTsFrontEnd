import { NavLink } from "react-router-dom";


function NavDropdown() {
  return (
      <ul className="w-25rem h-60 bg-nav  fixed top-14 pt-2 right-10">
        <li className="text-gray-300 transition duration-300 ease-in-out hover:text-orange text-xl font-semibold p-2 mb-2">
          <NavLink to="/">EUROPE</NavLink>
        </li>
        <li className="text-gray-300 transition duration-300 ease-in-out hover:text-orange text-xl font-semibold p-2 mb-2">
          <NavLink to="/">ASIA</NavLink>
        </li>
        <li className="text-gray-300 transition duration-300 ease-in-out hover:text-orange text-xl font-semibold p-2 mb-2">
          <NavLink to="/">NORTH AMERICA</NavLink>
        </li>
        <li className="text-gray-300 transition duration-300 ease-in-out hover:text-orange text-xl font-semibold p-2 mb-2">
          <NavLink to="/">CENTRAL AMERICA</NavLink>
        </li>
      </ul>
  );
}

export default NavDropdown