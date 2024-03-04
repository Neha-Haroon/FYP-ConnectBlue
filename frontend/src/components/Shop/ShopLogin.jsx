import { React, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

import registerImg from "../../assets/images/wwu.jpg";

const ShopLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/shop/login-shop`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!");
        navigate("/dashboard");
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <section className="px-5 ml:px-0">
      <div className="max-w-[1170px] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Img Box */}
          <div className="hidden lg:block rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={registerImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          {/* register form */}
          <div className="rounded-l-lg lg:pl-16 py-10 mx-auto rounded-lg shadow-md md:p-10">
            {/* heading */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Hello! <span className="text-primaryColor">Welcome</span> Back
              Worker🎉
            </h2>
            {/* main form */}
            <form className="py-4 md:py-0" onSubmit={handleSubmit}>
              {/* email */}
              <div className="mt-5">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full py-3 border-b border-solid border-[#bcbcbc] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                />
              </div>

              {/* password */}
              <div className="mb-5 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full pr-4 py-3 border-b border-solid border-[#bcbcbc] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>

              {/* remember me */}
              <div className="mb-5">
                <div className={`${styles.noramlFlex}`}>
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              {/* submit button */}
              <div className="mb-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  Login
                </button>
              </div>

              {/* sign up link */}
              <p className="mt-5 text-textColor text-center">
                Don't have an account?{" "}
                <Link
                  to="/shop-create"
                  className="text-primaryColor font-medium ml-1"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopLogin;
