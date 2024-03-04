import React, { useState } from "react";
import { useEffect } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Services/Ratings";
import ServiceDetailsCard from "../ServiceDetailsCard/ServiceDetailsCard";

const ServiceCard = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Service already in cart!");
    } else {
      // if (data.stock < 1) {
      //   toast.error("Service stock limited!");
      // } else {
      const cartData = { ...data, qty: 1 };
      dispatch(addTocart(cartData));

      toast.success("Service Booked Successfully!");
      // }
    }
  };

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link
          to={`${ isEvent === true
            ? `/service/${ data._id }?isEvent=true`
            : `/service/${ data._id }`
            }`}
        >
          <img
            src={`${ data.shop.avatar && data.shop.avatar?.url }`}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to={`/shop/preview/${ data?.shop._id }`}>
          <h5 className={`${ styles.shop_name }`}>{data.shop.name}</h5>
        </Link>
        <Link
          to={`${ isEvent === true
            ? `/service/${ data._id }?isEvent=true`
            : `/service/${ data._id }`
            }`}
        >
          <h4 className="pb-3 font-[500]">
            {data.category.length > 40
              ? data.category.slice(0, 40) + "..."
              : data.category}
          </h4>
          <h6>{data.shop.area}</h6>
          <br />
          <div className="flex">
            <Ratings rating={data?.ratings} />
          </div>

          {/* <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.serviceDiscountPrice}`}>
                {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
                $
              </h5>
              <h4 className={`${styles.price}`}>
                {data.originalPrice ? data.originalPrice + " $" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data?.sold_out} sold
            </span>
          </div> */}
        </Link>

        {/* side options */}
        <div>
          {click ? (
            <FaBookmark
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <FaRegBookmark
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          {/* <Link to="/checkout"> */}
          <FaRegCalendarPlus
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(data._id)}
            color="#444"
            title="Book Service"
          />
          {/* </Link> */}
          {/* <br /> */}
          {/* <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(data._id)}
            color="#444"
            title="Add to cart"
          /> */}
          {open ? <ServiceDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
