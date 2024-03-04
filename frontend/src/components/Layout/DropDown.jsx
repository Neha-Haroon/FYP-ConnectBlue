import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

import { areas } from "../../static/data";
import { getAllWorkersOfAdmin } from "../../redux/actions/sellers";
const DropDown = ({ categoriesData, setDropDown }) => {



  // const [searchData, setSearchData] = useState(null);

  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/shop?area=${ i }`);
    // const filteredWorkers =
    //   getAllSellers && getAllSellers.filter((shop) => shop.area);
    // setSearchData(filteredWorkers);
    setDropDown(false);
    window.location.reload();

  };
  const handleSearchChange = (e) => {
    const term = e.target.value;
    // setSearchTerm(term);


  };

  return (
    <div className=" w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      {getAllWorkersOfAdmin &&
        getAllWorkersOfAdmin.map((i, index) => (
          <div
            key={index}
            className={`${ styles.noramlFlex }`}
            onClick={() => submitHandle(i)}
          >
            {/* <img
              src={i.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt=""
            /> */}
            <h3 className="m-1 cursor-pointer select-none">{i.area}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
