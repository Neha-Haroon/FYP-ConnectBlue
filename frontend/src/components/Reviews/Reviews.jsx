// import React from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import customerAvatar from "../../assets/images/avatar1.png";
import customerAvatar2 from "../../assets/images/avatar2.png";
import customerAvatar3 from "../../assets/images/avatar3.png";
import customerAvatar4 from "../../assets/images/avatar4.png";
import { HiStar } from "react-icons/hi";

const Faq = () => {
  return (
    <>
      {/* CUSTOMER REVIEWS */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our customers say</h2>
            <p className="text__para text-center">
            Don't just take our word for it! Hear from those who have experienced our services
            </p>
          </div>

          <div className="mt-[30px] lg:mt-[55px]">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                  <div className="flex items-center gap-[13px]">
                    <img src={customerAvatar} alt="" />
                    <div>
                      <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Aliya Rahman
                      </h4>
                      <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                        <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                        <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                      </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                      Excellent work!
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                  <div className="flex items-center gap-[13px]">
                    <img src={customerAvatar2} alt="" />
                    <div>
                      <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Millie Chen
                      </h4>
                      <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                      </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                      Excellent work!
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                  <div className="flex items-center gap-[13px]">
                    <img src={customerAvatar3} alt="" />
                    <div>
                      <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Amjad Babar
                      </h4>
                      <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                        <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                        <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                      </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                      Excellent work!
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                  <div className="flex items-center gap-[13px]">
                    <img src={customerAvatar4} alt="" />
                    <div>
                      <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Noora
                      </h4>
                      <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                        <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                        <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                      </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                      Excellent work!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      ;{/* CUSTOMER REVIEWS END*/}
    </>
  );
};

export default Faq;
