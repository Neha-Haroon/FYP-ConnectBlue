import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import NavbarNew from "../components/Layout/NavbarNew";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import Footer from "../components/Layout/Footer";
import ServiceCard from "../components/Route/ServiceCard/ServiceCard";
import DropDown from "../components/Layout/DropDown";
import { areas } from "../static/data";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { categoriesData } from "../static/data";

import { BiMenuAltLeft } from "react-icons/bi";
import styles from "../styles/styles";
import Categories from "../components/Route/Categories/Categories";
import SearchedData from "../components/Route/Categories/SearchedData";

const ServicesPage = () => {
  const [searchParams] = useSearchParams();

  const categoryData = searchParams.get("category");
  const { allServices, isLoading } = useSelector((state) => state.services);
  const [data, setData] = useState([]);

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredServices =
      allServices && allServices.filter((service) => service.shop.name);
    setSearchData(filteredServices);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  useEffect(() => {
    if (categoryData === null) {
      const d = allServices;
      setData(d);
    } else {
      const d =
        allServices && allServices.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allServices]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <NavbarNew activeHeading={3} />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
         

          {/* service list */}
          <SearchedData />
         {/*  <Categories /> */}

          <div className={`${ styles.section }`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => <ServiceCard data={i} key={index} />)}
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                No Services Found!
              </h1>
            ) : null}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ServicesPage;
