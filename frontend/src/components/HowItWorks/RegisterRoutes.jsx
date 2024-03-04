import React from "react";
import { useNavigate } from "react-router-dom";
import serviceicon from "../../assets/images/serviceicon.png";
import formicon from "../../assets/images/formicon.png";
import login from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import styles from "../../styles/styles";

const RegisterRoutes = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* HOW IT WORKS */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the Best Home Maintenance Services
            </h2>
            <p className="text__para text-center">
            Enhancing homes, simplifying lives, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* Step1  */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={serviceicon} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[28px] leading-9 text-headingColor font-[700] text-center">
                  Find a Service
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Find any service you need
                </p>
                <Link
                  to="/services"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#515151] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* Step2  */}

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={login} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[28px] leading-9 text-headingColor font-[700] text-center">
                  Register/Login
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Register a new account or Login an exsiting one
                </p>
                <Link
                  to="/login"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#515151] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* Step3  */}

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={formicon} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[28px] leading-9 text-headingColor font-[700] text-center">
                  Contact Us
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Fill the form for the service you require
                </p>
                <Link
                  to="/contact"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#515151] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION END */}
    </>
  );
};

export default RegisterRoutes;
