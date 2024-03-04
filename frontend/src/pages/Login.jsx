import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login/Login.jsx";
import NavbarNew from "../components/Layout/NavbarNew.jsx";
import Footer from "../components/Layout/Footer.jsx";

const LoginPage = () => {
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
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
