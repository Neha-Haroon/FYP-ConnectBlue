import React from "react";
import about from "../../assets/images/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="mt-[-50px]">
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* IMAGE */}

          <div className="realtive w-[100%] lg:w-1/2 xl:w-[770px] z-10 lg:order-1">
            <img src={about} alt="" />
          </div>

          {/* CONTENT */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Home Maintenenance at you Doorstep</h2>
            <p className="text__para">
            Our commitment to convenience and quality. Find skilled professionals ready to cater to your home's needs effortlessly. Whether it's a small repair or a major upgrade, our platform connects you with reliable experts who bring expertise right to your door. Your home's care and enhancement are our priority, ensuring a seamless experience in every service we offer. 
            </p>

            <p className="text__para mt-[30px]">
            Simplify your home maintenance tasks with us, where reliability meets doorstep convenience
            </p>

            <Link to="/bookservice">
              <button className="btn">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
