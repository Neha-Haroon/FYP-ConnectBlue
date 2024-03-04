import React from "react";

import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerCustomerLinks,
  footerSupportLinks,
} from "../../static/data";
import logo from "../../assets/images/logo.jpg";

const socialLinks = [
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com/",
    icon: <AiOutlineFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/",
    icon: <AiOutlineYoutube className="group-hover:text-white w-4 h-5" />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col mr-40 md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-black rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Company
            </h2>

            <ul>
              {footercompanyLinks.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.link}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Customers
            </h2>

            <ul>
              {footerCustomerLinks.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.link}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>

            <ul>
              {footerSupportLinks.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.link}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2text-[16px] leading-7 font-[400] text-textColor"
        >
          <span>
            Copyright © {year} developed by ConnectBlue owners. All rights
            reserved.
          </span>
          <span>Terms · Privacy Policy</span>
          <div className="sm:block flex items-center justify-center w-full">
            <img
              src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
