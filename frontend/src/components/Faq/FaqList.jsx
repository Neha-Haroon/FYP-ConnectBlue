import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqList = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordian = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[7px] border border-solid border-[#a0a0a0] mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordian}
      >
        <h4 className="text-[18px] leading-7 lg:text-[19px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-primaryColor text-white border-none"
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#9696968f] rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-[13px] leading-6 lg:text-[16px] lg:leading-7 font-[400]">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqList;
