import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegCalendarPlus } from "react-icons/fa";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <div className="w-full header-bg shadow-sm rounded-[10px] p-4 pt-8">
      {/* Profile */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson
          size={active === 1 ? 35 : 30}
          color={active === 1 ? "blue" : ""}
        />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[#0040ffce]" : ""
          } 1000px:block hidden`}
        >
          My Profile
        </span>
      </div>

      {/* Bookings */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <FaRegCalendarPlus
          size={active === 2 ? 35 : 30}
          color={active === 2 ? "blue" : ""}
        />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[#0040ffce]" : ""
          } 800px:block hidden`}
        >
          My Bookings
        </span>
      </div>

      {/* Refunds */}
      {/* <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund
          size={active === 3 ? 35 : 30}
          color={active === 3 ? "blue" : ""}
        />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[#0040ffce]" : ""
          } 800px:block hidden`}
        >
          My Refunds
        </span>
      </div> */}

      {/* Chats */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage
          size={active === 4 ? 35 : 30}
          color={active === 4 ? "blue" : ""}
        />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[#0040ffce]" : ""
          } 800px:block hidden`}
        >
          My Chats
        </span>
      </div>

      {/* Track Bookings */}
      {/* <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges
          size={active === 5 ? 35 : 30}
          color={active === 5 ? "blue" : ""}
        />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[#0040ffce]" : ""
          } 800px:block hidden`}
        >
          Track Booking
        </span>
      </div> */}

      {/* Password */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine
          size={active === 6 ? 35 : 30}
          color={active === 6 ? "blue" : ""}
        />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[#0040ffce]" : ""
          } 800px:block hidden`}
        >
          Change Password
        </span>
      </div>

      {/* Addreesses */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook
          size={active === 1 ? 35 : 30}
          color={active === 7 ? "blue" : ""}
        />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[#0040ffce]" : ""
          } 800px:block hidden`}
        >
          Address
        </span>
      </div>

      {/* Admin */}
      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={active === 7 ? 35 : 30}
              color={active === 7 ? "blue" : ""}
            />
            <span
              className={`pl-3 ${
                active === 8 ? "text-[#0040ffce]" : ""
              } 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}

      {/* Logout */}
      <div
        className="single_item flex items-center cursor-pointer w-full mb-8"
        onClick={logoutHandler}
      >
        <AiOutlineLogin
          size={active === 8 ? 35 : 30}
          color={active === 8 ? "blue" : ""}
        />
        <span
          className={`pl-3  ${
            active === 8 ? "text-[#0040ffce]" : ""
          } 800px:block hidden`}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
