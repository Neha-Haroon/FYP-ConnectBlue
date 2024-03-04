import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllServicesShop } from "../../redux/actions/service";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});
  const { services } = useSelector((state) => state.services);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServicesShop(id));
    setIsLoading(true);
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res.data.shop);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    services &&
    services.reduce((acc, service) => acc + service.reviews.length, 0);

  const totalRatings =
    services &&
    services.reduce(
      (acc, service) =>
        acc + service.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="w-full py-5">
            {/* image */}
            <div className="w-full flex item-center justify-center">
              <img
                src={`${data.avatar?.url}`}
                alt=""
                className="w-[150px] h-[150px] object-cover rounded-full"
              />
            </div>
            {/* name */}
            <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
            {/* decription */}
            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
              {data.description}
            </p>
            {/* area */}
          </div>

          {/* area */}
          <div className="p-3">
            <h5 className="font-[600]">Area</h5>
            <h4 className="text-[#000000a6]">{data.area}</h4>
          </div>

          {/* address */}
          <div className="p-3">
            <h5 className="font-[600]">Address</h5>
            <h4 className="text-[#000000a6]">{data.address}</h4>
          </div>
          {/* phone number */}
          <div className="p-3">
            <h5 className="font-[600]">Phone Number</h5>
            <h4 className="text-[#000000a6]">{data.phoneNumber}</h4>
          </div>

          {/* gender */}
          <div className="p-3">
            <h5 className="font-[600]">Gender</h5>
            <h4 className="text-[#000000a6]">{data.gender}</h4>
          </div>
          {/* services */}
          <div className="p-3">
            <h5 className="font-[600]">Total Services</h5>
            <h4 className="text-[#000000a6]">{services && services.length}</h4>
          </div>
          {/* ratings */}
          <div className="p-3">
            <h5 className="font-[600]">Worker Ratings</h5>
            <h4 className="text-[#000000b0]">{averageRating}/5</h4>
          </div>

          {/* joined at */}
          <div className="p-3">
            <h5 className="font-[600]">Joined On</h5>
            <h4 className="text-[#000000b0]">
              {data?.createdAt?.slice(0, 10)}
            </h4>
          </div>
          {/* settings , sign out link */}
          {isOwner && (
            <div className="py-3 px-4">
              <Link to="/settings">
                <div
                  className={`${styles.button} bg-blue-600 !w-full !h-[42px] !rounded-[5px]`}
                >
                  <span className="text-white">Edit Worker</span>
                </div>
              </Link>
              <div
                className={`${styles.button} bg-blue-600 hover: bg-blue-700 !w-full !h-[42px] !rounded-[5px]`}
                onClick={logoutHandler}
              >
                <span className="text-white">Log Out</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShopInfo;
