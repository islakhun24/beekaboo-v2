/* eslint-disable react-hooks/exhaustive-deps */
import logo from "../../assets/svg/logo.svg";
import cart from "../../assets/svg/cart.svg";
import user from "../../assets/svg/user.svg";
import { MenuIcon } from "../../assets/svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';

import { BrowserView, MobileView } from 'react-device-detect';

const Header = (props) => {
  const [isToggle, setToggle] = useState(false);
  const {utils} = useSelector((state) => state);
  
  const { isMobile } = props;
  console.log('widthP', utils.progressPercent);
  useEffect(() => {

    
    if (utils.scrollPos < 56) {
      setToggle(false);
    }
  }, [utils.scrollPos, isToggle, utils.progressPercent]);
  const clickToggle = () => {
    setToggle(!isToggle);
  };
  const styleProgres = {
    height: "4px",
    width: utils.scrollPos < 30 ? "0%" : utils.progressPercent,
    backgroundColor: "#fff000",
  };
  return (
    <div>
      <BrowserView>
        <header
          style={utils.scrollPos > 20 ? { backgroundColor: "#FFF" } : {}}
          className=" z-50 fixed top-0 left-0 w-full"
        >
          <div
            style={{
              height: "56px",
            }}
            className="flex flex-row  space-x-8 px-16"
          >
            <div className="bg-white rounded-b-lg  flex items-center justify-center px-4">
              <Link to={`${config.basename}${"/"}`}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div
              style={{
                fontFamily: "Overlock",
                paddingBottom: "8px",
              }}
              className={
                utils.scrollPos > 16
                  ? "text-bee-orange flex flex-grow space-x-8 font-bold text-lg items-center justify-center"
                  : "text-black flex flex-grow space-x-8 font-bold text-lg items-center justify-center"
              }
            >
              <div>
                <Link to={`${config.basename}${"/shop"}`}>Shop</Link>
              </div>
              <div>
                {" "}
                <Link to={`${config.basename}${"/video"}`}>Video</Link>
              </div>
              <div>
                {" "}
                <Link to={`${config.basename}${"/music"}`}>Music</Link>
              </div>
              <div>
                {" "}
                <Link to={`${config.basename}${"/blog"}`}>Blog</Link>
              </div>
              <div>
                {" "}
                <Link to={`${config.basename}${"/learning-zone"}`}>
                  Learning Zone
                </Link>
              </div>
              <div>
                <Link to={`${config.basename}${"/about"}`}>About</Link>
              </div>
            </div>
            <div className="flex-wrap flex flex-row space-x-8 pl-16 items-center justify-center">
              <button >
                <FiShoppingCart className={
                  utils.scrollPos > 16 ?
                  "text-bee-orange":
                  "text-bee-black"
                } size={24}/>
              </button>
               <button>
                <FiUser className={
                  utils.scrollPos > 16 ?
                  "text-bee-orange":
                  "text-bee-black"
                } size={24}/>
              </button>
            </div>
          </div>
          <div style={styleProgres}></div>
        </header>
      </BrowserView>
      <MobileView>
      <header
          style={utils.scrollPos > 20 ? { backgroundColor: "#FFF" } : {}}
          className=" z-50  fixed top-0 left-0 w-full"
        >
          <div
            style={{
              height: "56px",
            }}
            className="flex flex-row space-x-8 px-4 justify-between"
          >
            <div className="bg-white rounded-b-lg  flex items-center justify-center px-4">
              <img src={logo} alt="" />
            </div>
            <button onClick={() => clickToggle()} className="px-4">
              <img className="" src={MenuIcon} alt="" />
            </button>
          </div>
          <div style={styleProgres}></div>

          {isToggle ? (
            <div className="z-40 w-screen h-screen  bg-white absolute p-8">
              <div
                style={{ fontFamily: "Sniglet" }}
                className="flex flex-col space-y-2 "
              >
                <div className="h-10">Shop</div>
                <div className="h-10">Video</div>
                <div className="h-10">Music</div>
                <div className="h-10">Blog</div>
                <div className="h-10">Learning Zone</div>
                <div className="h-10">About</div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-bee-orange flex justify-center items-center h-10 rounded-lg w-full">
                    <img
                      className="fill-current text-bee-orange"
                      src={cart}
                      alt=""
                    />
                  </button>
                  <button className="bg-bee-blue flex justify-center items-center h-10 rounded-lg w-full">
                    <img src={user} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </header>
        </MobileView>
    </div>
  );
};

export default Header;
