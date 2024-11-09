import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <header className="bg-violet-800 text-white p-4 py-6">
        <div className="w-full lg:w-[1024px] mx-auto">
          <nav className="">
            <div className="flex justify-between items-center gap-10 ">
                <div>
                  <h1 className="logo">
                    <Link to="/">Berachah House of Worship - Kota</Link>
                  </h1>
                </div>
                {/* Hamburger Menu */}
                <div className="lg:hidden">
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
                <div className="hidden lg:flex flex-start gap-8">
                  <ul className="flex flex-start items-center gap-8">
                    <li className={`hover:border-b-2 hover:border-violet-500 ${currentPath === '/' ? 'border-b-2 border-violet-500' : ''}`}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={`hover:border-b-2 hover:border-violet-500 ${currentPath === '/aboutus' ? 'border-b-2 border-violet-500' : ''}`}>
                      <Link to="/aboutus">Aboutus</Link>
                    </li>
                    <li className={`hover:border-b-2 hover:border-violet-500 ${currentPath === '/ministries' ? 'border-b-2 border-violet-500' : ''}`}>
                      <Link to="/ministries">Ministries</Link>
                    </li>
                    <li className={`hover:border-b-2 hover:border-violet-500 ${currentPath === '/branches' ? 'border-b-2 border-violet-500' : ''}`}>
                      <Link to="/branches">Branches</Link>
                    </li>
                    <li className={`hover:border-b-2 hover:border-violet-500 ${currentPath === '/contactus' ? 'border-b-2 border-violet-500' : ''}`}>
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
                    <div className="flex-col lg:hidden flex gap-8">
                      <ul className="mt-5 lg:mt-0">
                        {/* <li onClick={() => setIsMenuOpen(false)} className="py-2 hover:bg-violet-500 my-1"> */}
                        <li onClick={() => setIsMenuOpen(false)} className={`py-2 hover:bg-violet-500 my-1 ${currentPath === '/' ? 'bg-violet-500' : ''}`}>
                          <Link to="/" className="px-2">Home</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)} className={`py-2 hover:bg-violet-500 my-1 ${currentPath === '/aboutus' ? 'bg-violet-500' : ''}`}>
                          <Link to="/aboutus" className="px-2">Aboutus</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)} className={`py-2 hover:bg-violet-500 my-1 ${currentPath === '/ministries' ? 'bg-violet-500' : ''}`}>
                          <Link to="/ministries" className="px-2">Ministries</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)} className={`py-2 hover:bg-violet-500 my-1 ${currentPath === '/branches' ? 'bg-violet-500' : ''}`}>
                          <Link to="/branches" className="px-2">Branches</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)} className={`py-2 hover:bg-violet-500 my-1 ${currentPath === '/contactus' ? 'bg-violet-500' : ''}`}>
                          <Link to="/contactus" className="px-2">Contactus</Link>
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
