import React, {useEffect} from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedService from "../components/Route/FeaturedService/FeaturedService";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import RegisterRoutes from "../components/HowItWorks/RegisterRoutes";
import About from "../components/HowItWorks/About";
import Faq from "../components/Faq/Faq";
import Reviews from "../components/Reviews/Reviews";
import NavbarNew from "../components/Layout/NavbarNew";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavbarNew activeHeading={1} />
      <Hero />
      <RegisterRoutes />
      <About />
      <Categories />
      <Faq />
      <Reviews />
      {/* <BestDeals />
      <Events /> */}
      {/* <FeaturedService /> */}
      {/* <Sponsored /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
