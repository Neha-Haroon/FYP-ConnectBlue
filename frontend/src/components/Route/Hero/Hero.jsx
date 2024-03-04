import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import heroimg from "../../../assets/images/heroimg.png";
const Hero = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap[90px] items-center justify-between">
            {/* Hero CONTENT */}

            <div>
              <div className="lg:w-[570px] px-[20px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We Provide Reliable Services At Your Doorstep.
                </h1>
                <p className="text__para">
                  "Welcome to ConnectBlue, your go-to destination for connecting
                  with skilled local blue-collar workers. Our platform
                  simplifies hiring and requesting services, allowing you to
                  browse profiles, match jobs with nearby professionals, and
                  communicate directly."
                </p>
                <Link to="/services">
                  <button className="btn">Book Service</button>
                </Link>
              </div>
              {/* hero Counter */}
              {/* Make it dynamic*/}
              <div className="mt-[30px] leg:mt-[70px] px-[20px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[37px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    40+
                  </h2>
                  <span className="w-[180xp] h-2 bg-yellowColor rounded-full block mt-[-1px]"></span>

                  <p className="text__para">Positive Reviews</p>
                </div>
                {/* COunter 2 */}
                <div>
                  <h2 className="text-[37px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20+
                  </h2>
                  <span className="w-[180xp] h-2 bg-purpleColor rounded-full block mt-[-1px]"></span>

                  <p className="text__para">Workers</p>
                </div>

                {/* COunter 3 */}
                <div>
                  <h2 className="text-[37px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[180xp] h-2 bg-irisBlueColor rounded-full block mt-[-1px]"></span>

                  <p className="text__para">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* HERO CONTENT2 */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero section end */}
    </div>
  );
};

export default Hero;
