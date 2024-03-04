import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { FaRegCalendarPlus } from "react-icons/fa";
const DashboardSideBar = ({ active }) => {
  return (
    <div className="w-full header-bg h-[90vh] bg-white shadow-sm  sticky top-0 left-0 z-10">
      {/* single item */}

      {/* dashboard  */}
      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard"
          className="w-full flex items-center hover:text-[38px]"
        >
          <RxDashboard
            size={active === 1 ? 35 : 30}
            color={`${active === 1 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            My Dashboard
          </h5>
        </Link>
      </div>

      {/* My bookings */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FaRegCalendarPlus
            size={active === 2 ? 35 : 30}
            color={`${active === 2 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            My Bookings
          </h5>
        </Link>
      </div>

      {/* My Services */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-services" className="w-full flex items-center">
          <FiPackage
            size={active === 3 ? 35 : 30}
            color={`${active === 3 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            My Services
          </h5>
        </Link>
      </div>

      {/* Create Service */}
      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-create-service"
          className="w-full flex items-center"
        >
          <AiOutlineFolderAdd
            size={active === 4 ? 35 : 30}
            color={`${active === 4 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            Create Service
          </h5>
        </Link>
      </div>

      {/* My Events */}
      {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={active === 5 ? 35 : 30}
            color={`${active === 5 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            My Events
          </h5>
        </Link>
      </div> */}

      {/* Create Event */}
      {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile
            size={active === 6 ? 35 : 30}
            color={`${active === 6 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            Create Event
          </h5>
        </Link>
      </div> */}

      {/* My Withdrawed Money */}
      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-withdraw-money"
          className="w-full flex items-center"
        >
          <CiMoneyBill
            size={active === 7 ? 35 : 30}
            color={`${active === 7 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            My Withdrawed Money
          </h5>
        </Link>
      </div>

      {/* My Inbox */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <BiMessageSquareDetail
            size={active === 8 ? 35 : 30}
            color={`${active === 8 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            My Inbox
          </h5>
        </Link>
      </div>

      {/* My Discount Codes */}
      {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-coupouns" className="w-full flex items-center">
          <AiOutlineGift
            size={active === 9 ? 35 : 30}
            color={`${active === 9 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            My Discount Codes
          </h5>
        </Link>
      </div> */}

      {/* My Areas */}
      {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-areas" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={active === 12 ? 35 : 30}
            color={`${active === 12 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 12 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            Areas
          </h5>
        </Link>
      </div> */}

      {/* Settings */}
      <div className="w-full flex items-center p-4">
        <Link to="/settings" className="w-full flex items-center">
          <CiSettings
            size={active === 11 ? 35 : 30}
            color={`${active === 11 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 11 ? "text-[#0040ffce]" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
