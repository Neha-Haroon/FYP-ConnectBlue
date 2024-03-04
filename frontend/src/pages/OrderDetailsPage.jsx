import React from "react";
import Header from "../components/Layout/Header";
import NavbarNew from "../components/Layout/NavbarNew";
import Footer from "../components/Layout/Footer";
import UserOrderDetails from "../components/UserOrderDetails";

const OrderDetailsPage = () => {
  return (
    <div>
      <NavbarNew />
      <UserOrderDetails />
      <Footer />
    </div>
  );
};

export default OrderDetailsPage;
