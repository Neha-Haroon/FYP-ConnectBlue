import React, { useState } from "react";
import styles from "../../styles/styles";
import { categoriesData, serviceData, navItems, areas } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";

import { FaRegCalendarPlus } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assets/images/avatar1.png";
import logo from "../../assets/images/logo.jpg";
import { BiMenu } from "react-icons/bi";

const NavbarNew = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allServices } = useSelector((state) => state.services);
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
      allServices && allServices.filter((service) => service.category);
    setSearchData(filteredServices);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHandler = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    handleStickyHandler();
    window.addEventListener("scroll", handleStickyHandler);

    return () => {
      window.removeEventListener("scroll", handleStickyHandler);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");


  return (
    <>
      <header className="header flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link to="/">
              <div>
                <img src={logo} className="py-2 pl-10" alt="my company logo " />
              </div>
            </Link>
            {/* MENU */}

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.7rem]">
                {navItems.map((i, index) => (
                  <li key={index}>
                    <NavLink
                      to={i.url}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[800]"
                          : "text-textColor text-[16px] leading-7 font-[700] hover:text-primaryColor"
                      }
                    >
                      {i.title}
                    </NavLink>
                  </li>
                ))}
                {/* Dasahboard */}
                <div className={`${ styles.button }`}>
                  <Link to={`${ isSeller ? "/dashboard" : "/shop-create" }`}>
                    <h1 className="text-[#fff] flex items-center">
                      {isSeller ? "Dashboard" : "Join Team"}{" "}
                      <IoIosArrowForward className="ml-1" />
                    </h1>
                  </Link>
                </div>
              </ul>
            </div>


            <div className="flex">

              {/* {wishlist icon} */}
              <div className={`${ styles.noramlFlex }`}>
                <div
                  className="relative cursor-pointer mr-[15px]"
                  onClick={() => setOpenWishlist(true)}
                >
                  <FaRegBookmark size={30} color="#4E545F"/>
                  <span className="absolute right-0 top-0 rounded-full bg-[#3a89ff] w-4 h-4 top right p-0 m-0 font-mono text-[12px] leading-tight text-center">
                    {wishlist && wishlist.length}
                  </span>
                </div>
              </div>

              {/* cart icon */}
              <div className={`${ styles.noramlFlex }`}>
                <div
                  className="relative cursor-pointer mr-[15px]"
                  onClick={() => setOpenCart(true)}
                >
                  <FaRegCalendarPlus size={30} color="#4E545F" />

                  <span className="absolute right-0 top-0 rounded-full bg-[#3a89ff] w-4 h-4 top right p-0 m-0 font-mono text-[12px] leading-tight text-center">
                    {cart && cart.length}
                  </span>
                </div>
              </div>

              {/* login icon */}
              <div className={`${ styles.noramlFlex }`}>
                <div className="relative cursor-pointer mr-[15px]">
                  {isAuthenticated ? (
                    <Link to="/profile">
                      <img
                        src={`${ user?.avatar?.url }`}
                        className="w-[40px] h-[40px] rounded-full"
                        alt=""
                      />
                    </Link>
                  ) : (
                    <Link to="/login">
                      <CgProfile size={30} color="#4E545F" />
                    </Link>
                  )}
                </div>
              </div>

              {/* cart popup */}
              {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

              {/* wishlist popup */}
              {openWishlist ? (
                <Wishlist setOpenWishlist={setOpenWishlist} />
              ) : null}
            </div>
          </div>
        </div>
        {/* mobile header */}
        <div
          className={`${ active === true
            ? "header-bg shadow-sm fixed top-0 left-0 z-10"
            : null
            }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
        >
          <div className="w-full flex items-center justify-between">
            <div>
              <BiMenuAltLeft
                size={40}
                className="ml-4"
                onClick={() => setOpen(true)}
              />
            </div>
            {/* logo */}
            {/* <div>
              <Link to="/">
                <img
                  src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                  alt=""
                  className="mt-3 cursor-pointer"
                />
              </Link>
            </div> */}
            {/* <div>
              <div
                className="relative mr-[20px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart size={30} />
                <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div> */}
            {/* cart popup */}
            {/* {openCart ? <Cart setOpenCart={setOpenCart} /> : null} */}

            {/* wishlist popup */}
            {/* {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null} */}
          </div>

          {/* header sidebar */}
          {open && (
            <div
              className={` fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
            >
              <div className="fixed w-[70%] bg-[#494747] h-screen top-0 left-0 z-10 overflow-y-scroll">
                <div className="header w-full justify-between flex pr-3">
                  <div>
                    {/* <div
                      className="relative mr-[15px]"
                      onClick={() => setOpenWishlist(true) || setOpen(false)}
                    >
                      <AiOutlineHeart size={30} className="mt-5 ml-3" />
                      <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                        {wishlist && wishlist.length}
                      </span>
                    </div> */}
                  </div>
                  <RxCross1
                    size={30}
                    className="ml-4 mt-5"
                    onClick={() => setOpen(false)}
                  />
                </div>

                <div className="my-8 w-[92%] m-auto h-[40px relative]">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchData && (
                    <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                      {searchData.map((i) => {
                        const d = i.category;

                        const Service_name = d.replace(/\s+/g, "-");
                        return (
                          <Link to={`/service/${ Service_name }`}>
                            <div className="flex items-center">
                              {/* <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            /> */}
                              <h5>{i.category}</h5>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
                <Navbar active={activeHeading} />
                <div className={`${ styles.button } ml-4 !rounded-[4px]`}>
                  <Link to="/shop-create">
                    <h1 className="text-[#fff] flex items-center">
                      Join Our Team! <IoIosArrowForward className="ml-1" />
                    </h1>
                  </Link>
                </div>
                <br />
                <br />
                <br />

                <div className="flex w-full justify-center">
                  {isAuthenticated ? (
                    <div>
                      <Link to="/profile">
                        <img
                          src={`${ user.avatar?.url }`}
                          alt=""
                          className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                        />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="text-[18px] pr-[10px] text-[#000000b7]"
                      >
                        Login /
                      </Link>
                      <Link
                        to="/sign-up"
                        className="text-[18px] text-[#000000b7]"
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
export default NavbarNew;
