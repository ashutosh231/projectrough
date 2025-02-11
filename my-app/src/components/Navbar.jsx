import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setNavbarState(!navbarState);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="relative flex justify-between items-center p-4 bg-black text-white shadow-lg border-b-2 border-gray-700 z-50">
        <div className="flex items-center gap-4">
          <Link to="/" className="cursor-pointer text-2xl font-bold uppercase tracking-wide">
            Tour
          </Link>
          <div className="md:hidden" onClick={toggleNavbar}>
            {navbarState ? (
              <VscChromeClose className="text-3xl cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center relative">
          {["Home", "About", "Places"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-lg hover:text-teal-400 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Explore Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-lg hover:text-teal-400 transition duration-300 flex items-center"
            >
              Explore
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50 overflow-visible">
                {["Destinations", "Activities", "Accommodation", "Travel Tips"].map((subItem) => (
                  <li key={subItem}>
                    <Link
                      to={`/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 hover:bg-teal-400 hover:text-white transition duration-300"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <Link to="/login">
          <button className="hidden md:block px-6 py-2 text-white bg-teal-600 rounded-lg text-lg uppercase hover:bg-teal-700 transition duration-300 shadow-md">
            Login
          </button>
        </Link>
      </nav>

      {/* Mobile Menu */}
      {navbarState && (
        <div className="fixed top-14 left-0 w-full bg-black shadow-lg md:hidden z-50">
          <ul className="flex flex-col items-start p-4">
            {["Home", "About", "Places", "Testimonials"].map((item) => (
              <li key={item} className="w-full mb-4">
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-white text-lg hover:text-teal-400 transition duration-300"
                  onClick={toggleNavbar}
                >
                  {item}
                </Link>
              </li>
            ))}

            {/* Explore Dropdown */}
            <li className="w-full mb-4 relative">
              <button
                onClick={toggleDropdown}
                className="text-white text-lg hover:text-teal-400 transition duration-300 flex items-center w-full"
              >
                Explore
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 w-full bg-black text-white rounded-md shadow-lg z-50 overflow-visible">
                  {["Destinations", "Activities", "Accommodation", "Travel Tips"].map((subItem) => (
                    <li key={subItem} className="w-full">
                      <Link
                        to={`/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 hover:bg-teal-400 hover:text-white transition duration-300"
                        onClick={() => {
                          setDropdownOpen(false);
                          setNavbarState(false);
                        }}
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="w-full mt-4">
              <Link to="/login">
                <button
                  className="w-full px-6 py-3 text-white bg-teal-600 rounded-lg text-lg uppercase hover:bg-teal-700 transition duration-300 shadow-md"
                  onClick={toggleNavbar}
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
