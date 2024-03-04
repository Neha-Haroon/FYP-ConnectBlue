import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Signup from "../components/Signup/Signup";
import NavbarNew from "../components/Layout/NavbarNew";
import Footer from "../components/Layout/Footer";

const SignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <NavbarNew />
      <Signup />
      <Footer />
    </div>
  );
};

export default SignupPage;
