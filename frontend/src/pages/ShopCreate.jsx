import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopCreate from "../components/Shop/ShopCreate";
import NavbarNew from "../components/Layout/NavbarNew";
import Footer from "../components/Layout/Footer";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller._id}`);
    }
  }, []);
  return (
    <div>
      <NavbarNew />
      <ShopCreate />
      <Footer />
    </div>
  );
};

export default ShopCreatePage;
