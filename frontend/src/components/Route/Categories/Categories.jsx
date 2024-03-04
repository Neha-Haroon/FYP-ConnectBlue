
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import styles from "../../../styles/styles";
import React, { useState } from "react";
import { categoriesData, serviceData, navItems, areas } from "../../../static/data";
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
import DropDown from "../../Layout/DropDown";
import { useSelector } from "react-redux";
// import Cart from "../cart/Cart";
// import Wishlist from "../Wishlist/Wishlist";
// import { RxCross1 } from "react-icons/rx";

import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
// import userImg from "../../assets/images/avatar1.png";
// import logo from "../../assets/images/logo.jpg";
// import { BiMenu } from "react-icons/bi";



const Categories = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      {/* SERVICES SECTION */}

      <section>
        <div className="container">

          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Services</h2>
            <div className="grid ">
              <p className="text__para text-center">
              We put your home's well-being first, guaranteeing a smooth and stress-free experience with every service. Our goal is to make maintaining your home simple and convenient.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {categoriesData.map((item, index) => {
            // const { name, desc, bgColor, textColor } = item;
            const handleSubmit = (item) => {
              console.log(item);
              navigate(`/service?category=${ item.type }`);

              window.location.reload();
            };
            return (
              <div>
                <div className="py-[30px] px-3 lg:px-5">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                    {item.type}
                  </h2>
                  <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between mt-[30px]">
                    <Link
                      to={`/services?category=${ item.type }`}
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#515151] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <BsArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                    <span
                      className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
                      style={{
                        background: `${ item.bgColor }`,
                        color: `${ item.textColor }`,
                        borderRadius: "6px 0 0 6px",
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div />
      </section >
      {/* SERVICES SECTION END*/}
    </>
  );
};

export default Categories;
