import { NavLink } from "react-router-dom";
import logo from "../../../public/Images/newLogo.webp";


function Nav() {
  const menuItems: string[] = [
    "About",
    "Destinations",
    "Blog",
    "Travel Tips",
  ];
  return (
    <nav className="bg-nav fixed w-full top-0 left-0">
      <div className="mx-auto px-2 py-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* LOGO */}
          <div className="w-56 ms-16 logoContainer">
            <NavLink to="/">
              <img className="my-10" src={logo} alt="Travels with Drea Logo" />
            </NavLink>
          </div>
          {/* MENU */}
          <ul className="flex space-x-4 me-16">
            <li className="text-gray-300 transition duration-300 ease-in-out hover:text-orange text-xl font-semibold">
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            {menuItems.map((item, index) => (
              <li
                className="text-gray-300 transition duration-300 ease-in-out hover:text-orange text-xl font-semibold"
                key={index}
              >
                <NavLink to={`/${item.replace(/\s+/g, "").toLowerCase()}`}>
                  {item.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
