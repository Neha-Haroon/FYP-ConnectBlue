import React, { useState, useEffect } from "react";
import { serviceData, areas } from "../../../static/data";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";
import { categoriesData } from "../../../static/data";
//import { CiMoneyBill } from "react-icons/ci";
//import axios from "axios";

const SearchedData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [category, setCategory] = useState("");
  const handleSearchChange = /* async */ (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    /*  try {
       const response = await axios.get(`/api/services/search?area=${term}`);
       setSearchData(response.data.services);
     } catch (error) {
       console.error("Error fetching data:", error);
       // Handle error as needed
     } */
    const filteredServices =
      serviceData &&
      serviceData.filter((services) =>
        services.area.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredServices);
    /*   allServices && allServices.filter((service) => service.category);
        setSearchData(filteredServices); */
  };
  const handleScreenClick = () => {
    // Hide the search bar logic here
    setSearchData(null);
  };
  // Attach a click event listener to the document
  useEffect(() => {
    document.addEventListener("click", handleScreenClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleScreenClick);
    };
  }, []);
  return (
    /*  <div className="w-[50%] relative">
      <input
        type="text"
        placeholder="Search Area"
        value={searchTerm}
        onChange={handleSearchChange}
        className="h-[40px] w-full px-2 border-blue-600 border-2 rounded-md"
      />
    </div> */
    <div className="lg:col-span-12 flex justify-center">
      <div className="search_bar">
        <form className="flex flex-col lg:flex-row items-center gap-4">
          {/* category wise */}
          <div className="flex flex-col lg:flex-row gap-3 form__group form__group-fast">
            <span>
              <BiCategory />
            </span>
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Categories
              </h6>
              <input
                type="text"
                placeholder="Choose your service"
                value={searchTerm}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
          </div>

          {/* location wise search */}
          <div className="flex flex-col lg:flex-row gap-3 form__group form__group-last">
            <span>
              <SlLocationPin />
            </span>
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Location
              </h6>
              <input
                type="text"
                placeholder="Enter Area"
                value={searchTerm}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
          </div>
          {/*           <div className="flex flex-col lg:flex-row gap-3 form__group form__group-last">
          <span>
            <CiMoneyBill />
          </span>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Service Fee
            </h6>
            <input
              type="number"
              placeholder="Service Fee"
              ref={avgfeeRef}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
        </div> */}
          <span className="search_icon cursor-pointer mt-4 lg:mt-5">
            <FaSearch />
          </span>
          {/*    {searchData && searchData.length !== 0 ? (
            <div className="absolute">
              {searchData &&
                searchData.map((i, index) => {
                  const d = i.name;
                  const service_name = d.replace(/\s+/g, "-");
                  return (
                    <Link to={`/service/${service_name}`} key={index}>
                      <div className="w-full flex items-start py-3">
{/*                         <img
                          src={i.serviceData && i.serviceData.image_Url[0].url}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        /> 
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null} */}
        </form>
      </div>
    </div>
  );
};

export default SearchedData;
