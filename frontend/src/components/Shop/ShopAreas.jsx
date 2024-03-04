import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";
import { areas } from "../../static/data";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import {
  deleteSellerArea,
  loadSeller,
  updateSellerArea,
  updateUserInformation,
} from "../../redux/actions/sellers";

const ShopAreas = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [name, setAreaName] = useState("");
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // await axios
    //   .put(
    //     `${server}/shop/update-seller-areas`,
    //     {
    //       name,
    //     },
    //     { withCredentials: true }
    //   )
    //   .then((res) => {
    //     toast.success("Shop info updated succesfully!");
    //     dispatch(l(name));
    //   })
    //   .catch((error) => {
    //     {
    //       console.log("error at");
    //     }
    //     toast.error(error.response.data.message);
    //   });
    if (name === "") {
      toast.error("Please fill area the field!");
    } else {
      dispatch(updateSellerArea(name));
      setOpen(false);
      setAreaName("");
    }
  };

  const handleDelete = (item) => {
    const id = item._id;
    dispatch(deleteSellerArea(id));
  };

  return (
    <div className="w-full px-5">
      {open && (
        <div className="fixed w-full h-screen bg-[#0000004b] top-0 left-0 flex items-center justify-center ">
          <div className="w-[35%] h-[80vh] bg-white rounded shadow relative overflow-y-scroll">
            <div className="w-full flex justify-end p-3">
              <RxCross1
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <h1 className="text-center text-[25px] font-Poppins">
              Add New Area
            </h1>
            <div className="w-full">
              <form aria-required onSubmit={handleSubmit} className="w-full">
                <div className="w-full block p-4">
                  <div className="w-full pb-2">
                    <label className="block pb-2">Area</label>
                    <select
                      name=""
                      id=""
                      value={name}
                      onChange={(e) => setAreaName(e.target.value)}
                      className="w-[95%] border h-[40px] rounded-[5px]"
                    >
                      <option value="" className="block border pb-2">
                        choose your area
                      </option>
                      {areas &&
                        areas.map((item) => (
                          <option
                            className="block pb-2"
                            key={item.name}
                            value={item.name}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className=" w-full pb-2">
                    <input
                      type="submit"
                      className={`${styles.input} text-[#bbcbef] bg-blue-700 hover:bg-blue-600 mt-5 cursor-pointer`}
                      required
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          My Areas
        </h1>
        <div
          className={`${styles.button} text-[#bbcbef] bg-blue-700 hover:bg-blue-600 !rounded-md`}
          onClick={() => setOpen(true)}
        >
          <span className="text-[#fff]">Add New</span>
        </div>
      </div>
      <br />
      {seller &&
        seller.area.map((item, index) => (
          <div
            className="w-full bg-white h-min 800px:h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10 mb-5"
            key={index}
          >
            <div className="flex items-center">
              <h5 className="pl-5 font-[600]">{item.name}</h5>
            </div>
            {/* <div className="pl-8 flex items-center">
              <h6 className="text-[12px] 800px:text-[unset]">
                {item.address1} {item.address2}
              </h6>
            </div>
            <div className="pl-8 flex items-center">
              <h6 className="text-[12px] 800px:text-[unset]">
                {seller && seller.phoneNumber}
              </h6>
            </div> */}
            <div className="min-w-[10%] flex items-center justify-between pl-8">
              <AiOutlineDelete
                size={25}
                className="cursor-pointer"
                onClick={() => handleDelete(item)}
              />
            </div>
          </div>
        ))}
      {console.log(seller)}
      {seller && seller.area.length === 0 && (
        <h5 className="text-center pt-8 text-[18px]">
          You not have any saved address!
        </h5>
      )}
    </div>
  );
};
export default ShopAreas;
