import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllServicesShop } from "../../redux/actions/service";
import styles from "../../styles/styles";
import ServiceCard from "../Route/ServiceCard/ServiceCard";
import Ratings from "../Services/Ratings";
import { getAllEventsShop } from "../../redux/actions/event";

const ShopProfileData = ({ isOwner }) => {
  const { services } = useSelector((state) => state.services);
  const { events } = useSelector((state) => state.events);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServicesShop(id));
    dispatch(getAllEventsShop(id));
  }, [dispatch]);

  const [active, setActive] = useState(1);

  const allReviews =
    services && services.map((service) => service.reviews).flat();

  return (
    <>
      <div className="relative">
        {isOwner && (
          <div>
            <Link to="/dashboard">
              <div
                className={`${styles.button} bg-blue-600 hover: bg-blue-700 !rounded-[4px] h-[42px]`}
              >
                <span className="text-[#fff]"> Dashboard</span>
              </div>
            </Link>
          </div>
        )}
      </div>
      <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded w-full">
        <div className="flex w-full items-center justify-between">
          {/* <div className="w-full flex"> */}
          <div className="w-full flex justify-between border-b pt-10 pb-2">
            {/* My Services */}
            {/* <div className="flex items-center" onClick={() => setActive(1)}> */}
            <div className="relative" onClick={() => setActive(1)}>
              <h5
                className={
                  "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
                  // `font-[600] text-[20px] ${
                  // active === 1 ? "text-red-500" : "text-[#333]"
                  // } cursor-pointer pr-[20px]`
                }
              >
                My Services
              </h5>
              {active === 1 ? (
                <div className={`${styles.active_indicator}`} />
              ) : null}
            </div>

            {/* Events */}
            {/* <div className="flex items-center" onClick={() => setActive(2)}>
              <h5
                className={`font-[600] text-[20px] ${
                  active === 2 ? "text-red-500" : "text-[#333]"
                } cursor-pointer pr-[20px]`}
              >
                Running Events
              </h5>
            </div> */}

            {/* Reviews */}
            <div className="relative" onClick={() => setActive(3)}>
              <h5
                className={`text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]`}
              >
                My Reviews
              </h5>
              {active === 3 ? (
                <div className={`${styles.active_indicator}`} />
              ) : null}
            </div>
          </div>
        </div>

        <br />
        {active === 1 && (
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {services &&
              services.map((i, index) => (
                <ServiceCard data={i} key={index} isShop={true} />
              ))}
          </div>
        )}

        {/* {active === 2 && (
        <div className="w-full">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {events &&
              events.map((i, index) => (
                <ServiceCard
                  data={i}
                  key={index}
                  isShop={true}
                  isEvent={true}
                />
              ))}
          </div>
          {events && events.length === 0 && (
            <h5 className="w-full text-center py-5 text-[18px]">
              No Events have for this shop!
            </h5>
          )}
        </div>
      )} */}

        {active === 3 && (
          <div className="w-full">
            {allReviews &&
              allReviews.map((item, index) => (
                <div className="w-full flex my-4">
                  <img
                    src={`${item.user.avatar?.url}`}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                  <div className="pl-2">
                    <div className="flex w-full items-center">
                      <h1 className="font-[600] pr-2">{item.user.name}</h1>
                      <Ratings rating={item.rating} />
                    </div>
                    <p className="font-[400] text-[#000000a7]">
                      {item?.comment}
                    </p>
                    <p className="text-[#000000a7] text-[14px]">
                      {"2days ago"}
                    </p>
                  </div>
                </div>
              ))}
            {allReviews && allReviews.length === 0 && (
              <h5 className="w-full text-center py-5 text-[18px]">
                No Reviews For This Worker Yet.
              </h5>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ShopProfileData;
