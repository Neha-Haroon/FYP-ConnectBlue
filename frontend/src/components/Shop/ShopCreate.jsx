import { React, useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { RxAvatar } from "react-icons/rx";
import { areas } from "../../static/data";

import registerImg from "../../assets/images/wwu.jpg";
const ShopCreate = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");
  const [cnicNumber, setCNIC] = useState();
  const [avatar, setAvatar] = useState();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [gender, setGender] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${ server }/shop/create-shop`, {
        name,
        email,
        password,
        avatar,
        gender,
        cnicNumber,
        address,
        phoneNumber,
        area,
      })
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAvatar();
        setGender("");
        setCNIC();
        setAddress("");
        setPhoneNumber();
        setArea("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <section className="px-5 ml:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Img Box */}
          <div className="hidden lg:block rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={registerImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* register form */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            {/* heading */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Work with <span className="text-primaryColor">Us!</span>
            </h2>

            {/* main form */}
            <form onSubmit={handleSubmit}>
              {/* Name */}

              <div className="mb-5">
                <input
                  type="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full pr-4 py-3 border-b border-solid border-[#bcbcbc] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                />
              </div>

              {/*  phone number*/}
              <div className="mb-5">
                <input
                  type="number"
                  name="phoneNumber"
                  required
                  pattern="[0-9]{11}"
                  placeholder="Phone Number (03xx-xxxxxxx)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pr-4 py-3 border-b border-solid border-[#bcbcbc] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                />
              </div>

              {/* email */}
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pr-4 py-3 border-b border-solid border-[#bcbcbc] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                />
              </div>

              {/* area */}

              <div>
                <label className="text-textColor">Enter Area</label>
                <select
                  className="w-full mt-2 border h-[35px] rounded-[5px]"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                >
                  {areas &&
                    areas.map((i) => (
                      <option value={i.name} key={i.name}>
                        {i.name}
                      </option>
                    ))}
                </select>
              </div>

              <br />
              {/*shop address */}
              <div className="mb-5">
                <input
                  type="address"
                  name="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Shop Address(If any)"
                  className="w-full pr-4 py-3 border-b border-solid border-[#bcbcbc] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                />
              </div>

              {/*  CNIC */}
              <div className="mb-5">
                <input
                  type="number"
                  name="cnicNumber"
                  required
                  pattern="[0-9]{13}"
                  placeholder="CNIC (xxxxxxxxxv)"
                  value={cnicNumber}
                  onChange={(e) => setCNIC(e.target.value)}
                  className="w-full pr-4 py-3 border-b border-solid border-[#bcbcbc] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                />
              </div>

              {/* zip code */}
              {/* 
              <div className="mb-5">
                <input
                  type="number"
                  name="zipcode"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Zip Code"
                  className="w-full pr-4 py-3 border-b border-solid border-[#bcbcbc] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                />
              </div> */}

              {/* password */}

              <div className="mb-5 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full pr-4 py-3 border-b border-solid border-[#bcbcbc] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>

              {/* gender */}
              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="role"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>

              {/* image */}
              <div>
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mb-5 flex items-center">
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                    {avatar ? (
                      <img
                        src={avatar}
                        alt="avatar"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )}
                  </span>
                  <label
                    htmlFor="file-input"
                    className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <span>Upload Photo</span>
                    <input
                      type="file"
                      name="avatar"
                      id="file-input"
                      onChange={handleFileInputChange}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>

              {/* submit button */}
              <div className="mb-5 ">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  Sign Up
                </button>
              </div>

              {/* sign in link */}

              <p className="mt-5 text-textColor text-center">
                Already have an account?{" "}
                <Link
                  to="/shop-login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCreate;
