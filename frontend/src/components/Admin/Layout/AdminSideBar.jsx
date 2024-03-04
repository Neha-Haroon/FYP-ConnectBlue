import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { GrWorkshop } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

import { FaRegCalendarPlus } from "react-icons/fa";
const AdminSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] header-bg shadow-sm  sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <RxDashboard size={30} color={`${active === 1 ? "blue" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Admin Dashboard
          </h5>
        </Link>
      </div>

      {/* bookings  */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            All Bookings
          </h5>
        </Link>
      </div>

      {/* worker  */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin-sellers" className="w-full flex items-center">
          <GrWorkshop size={30} color={`${active === 3 ? "blue" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            All Workers
          </h5>
        </Link>
      </div>

      {/* user  */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin-users" className="w-full flex items-center">
          <HiOutlineUserGroup
            size={30}
            color={`${active === 4 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            All Cleints
          </h5>
        </Link>
      </div>

      {/* services */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin-services" className="w-full flex items-center">
          <FaRegCalendarPlus
            size={30}
            color={`${active === 5 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            All Services
          </h5>
        </Link>
      </div>

      {/* events */}
      {/* <div className="w-full flex items-center p-4">
        <Link to="/admin-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 6 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div> */}

      {/* withdraw money request */}
      {/* <div className="w-full flex items-center p-4">
        <Link to="/admin-withdraw-request" className="w-full flex items-center">
          <CiMoneyBill size={30} color={`${active === 7 ? "blue" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Withdraw Booking Request
          </h5>
        </Link>
      </div> */}

      {/* settings */}
      <div className="w-full flex items-center p-4">
        <Link to="/profile" className="w-full flex items-center">
          <AiOutlineSetting
            size={30}
            color={`${active === 8 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
