import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // New state for fade out
  const [error, setError] = useState("");

  //Accessing the user data from Redux store
  const registeredUser = useSelector((state) => state.user.user);

  //Setup Yup for form validation
  const loginSchema = Yup.object().shape({
    phoneorEmail: Yup.string()
      .required("Phone / Email is required")
      .test(
        "phone-or-email",
        "Phone / Email must be a valid email or phone number",
        function (value) {
          const phoneRegex = /^[6-9]\d{9}$/;
          const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
          return phoneRegex.test(value) || emailRegex.test(value);
        }
      ),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password atleast 6 characters")
      .max(50, "Password Too Long"),
  });

  //Setup formik
  const formik = useFormik({
    initialValues: {
      phoneorEmail: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // Check if the entered data matches the registered user
      if (
        registeredUser &&
        registeredUser.phoneorEmail === values.phoneorEmail &&
        registeredUser.password === values.password
      ) {
        // Login success, navigate to dashboard
        setIsLoginSuccess(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } else {
        // Show error if the credentials don't match
        setError("Invalid login credentials or user not registered.");
      }
    },
  });

  return (
    <>
      <div className="w-[1024px] mx-auto py-10">
        <form className="w-[400px] mx-auto" onSubmit={formik.handleSubmit}>
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <div className="mt-5">
            <label
              htmlFor="phoneorEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Phone / Email
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="phoneorEmail"
                name="phoneorEmail"
                autoComplete="phoneorEmail"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                value={formik.values.phoneorEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.phoneorEmail && formik.errors.phoneorEmail ? (
              <div className="text-red-500">{formik.errors.phoneorEmail}</div>
            ) : null}
          </div>
          <div className="mt-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-violet-800 text-white px-5 py-2 rounded-md w-full my-5"
          >
            SingIn
          </button>
          <p className="text-center text-violet-900 font-bold my-5">
            Dont have Account?&nbsp;
            <Link to="/register" className="text-red-600">
              Register
            </Link>
            &nbsp;Now
          </p>
          {isLoginSuccess &&
            !fadeOut && ( // Show only if not fading out
              <div
                className={`bg-green-600 text-white px-5 py-3 text-center transition-transform transform ${
                  fadeOut
                    ? "translate-y-20 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                Login Successfull... Redirecting to Dashboard
              </div>
            )}
          {error && (
            <div className="bg-red-600 text-white px-5 py-3 text-center">
              {error}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
