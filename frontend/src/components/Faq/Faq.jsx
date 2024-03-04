import React from "react";
import { Link } from "react-router-dom";
import { faqs } from "../../static/data";

import faq from "../../assets/images/faq.jpg";
import FaqList from "./FaqList";
import feature from "../../assets/images/feature2.jpg";

const Faq = () => {
  return (
    <>
      {/* FEATURES SECTION */}
      <section>
        <div className="container mt-[-40px]">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* CONTENT */}

            <div className="ml-8 xl:w-[670px]">
              <h2 className="heading">Book a Service Or Work with Us.</h2>
              <ul className="pl-4 pt-4 text-[19px]">
                <li className="text__para">1. Apply for a Blue collar job</li>
                <li className="text__para">2. Contact Us for a service</li>
                <li className="text__para">3. View our customer reviews</li>
              </ul>
            </div>

            {/* IMAGE */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] ">
              <img src={feature} className="3/4" alt="" />
            </div>
          </div>
        </div>
      </section>
      ;{/* FEATURES SECTION END */}
      {/* FAQ section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faq} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Frequently Asked Questions</h2>

              <ul className="mt-[30px]">
                {faqs.map((item, index) => (
                  <FaqList item={item} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section END */}
    </>
  );
};

export default Faq;
