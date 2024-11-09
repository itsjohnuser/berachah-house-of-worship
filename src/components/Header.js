import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log("Created User Data from Store from Header is: ", user);

  // Mobile Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  }

  // useEffect(() => {
  //   if (user) {
  //     createUserWithEmailAndPassword(auth, user.phoneorEmail, user.password)
  //       .then((userCredential) => {
  //         // Signed up
  //         const user = userCredential.user;
  //         // ...
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         // ..
  //         console.log(errorCode + " - " + errorMessage);
  //       });
  //   }
  // }, [user]);

  // Logout handler
  const handleLogout = () => {
    dispatch(logout()); // Clear user data in Redux store
    navigate("/home"); // Redirect to login page
  };

  return (
    <>
      <header className="bg-violet-800 text-white p-4 py-6">
        <div className="w-full md:w-[1024px] mx-auto">
          <nav className="">
            <div className="flex justify-between items-center gap-10 ">
                <div>
                  <h1 className="logo">
                    <Link to="/">Berachah House of Worship - Kota</Link>
                  </h1>
                </div>
                {/* Hamburger Menu */}
                <div className="md:hidden">
                  <button className="text-white" onClick={toggleMenu}>
                    {
                      isMenuOpen ? (
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      )
                    }
                  </button>
                </div>
                <div className="hidden md:flex flex-start gap-8">
                  <ul className="flex flex-start items-center gap-8">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">Aboutus</Link>
                    </li>
                    <li>
                      <Link to="/ministries">Ministries</Link>
                    </li>
                    <li>
                      <Link to="/branches">Branches</Link>
                    </li>
                    <li>
                      <Link to="/contactus">Contactus</Link>
                    </li>
                  </ul>
                  <ul className="flex flex-start items-start gap-3">
                    {user ? (
                      <li>
                        <button
                          onClick={handleLogout}
                          className="bg-red-600 text-white px-5 py-2 rounded-full"
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/login"
                            className="bg-violet-900 text-white px-5 py-2 rounded-full"
                          >
                            Login
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            to="/register"
                            className="bg-violet-900 text-white px-5 py-2 rounded-full"
                          >
                            Register
                          </Link>
                        </li> */}
                      </>
                    )}
                  </ul>
                </div>     
              </div>
                {/* Mobile Menu */}
                {
                  isMenuOpen ? (
                    <div className="flex-col md:hidden flex gap-8">
                      <ul className="">
                        <li onClick={() => setIsMenuOpen(false)}>
                          <Link to="/">Home</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}>
                          <Link to="/aboutus">Aboutus</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}>
                          <Link to="/ministries">Ministries</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}>
                          <Link to="/branches">Branches</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}>
                          <Link to="/contactus">Contactus</Link>
                        </li>
                      </ul>
                      <ul className="flex flex-start items-start gap-3">
                          {user ? (
                            <li>
                              <button
                                onClick={handleLogout}
                                className="bg-red-600 text-white px-5 py-2 rounded-full"
                              >
                                Logout
                              </button>
                            </li>
                          ) : (
                            <>
                              <li>
                                <Link
                                  to="/login"
                                  className="bg-violet-900 text-white px-5 py-2 rounded-full"
                                >
                                  Login
                                </Link>
                              </li>
                            </>
                          )}
                      </ul>
                    </div>
                  ) : null
                }
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
