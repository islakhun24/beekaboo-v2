import { useCallback, useEffect, useRef, useState } from "react";
import About from "../pages/home/About";
import Blog from "../pages/home/Blog";
import Home from "../pages/home/Home";
import Members from "../pages/home/Members";
import Shop from "../pages/home/Shop";
import Song from "../pages/home/Song";
import SpesialEpisode from "../pages/home/SpesialEpisode";
/* eslint-disable no-undef */
function App() {
  const [y, setY] = useState(window.scrollY);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const memberRef = useRef(null);
  const homeRef = useRef(null);
  const spesialEpisodeRef = useRef(null);
  const songRef = useRef(null);
  const blogRef = useRef(null);
  const shopRef = useRef(null);
  const footerRef = useRef(null);

//   const [headerRefValue, setheaderRefValue] = useState(0);
//   const [aboutRefValue, setaboutRefValue] = useState(0);
//   const [memberRefValue, setmemberRefValue] = useState(0);
//   const [spesialEpisodeRefValue, setspesialEpisodeRefValue] = useState(0);
//   const [songRefValue, setsongRefValue] = useState(0);
//   const [blogRefValue, setblogRefValue] = useState(0);
//   const [shopRefValue, setshopRefValue] = useState(0);
//   const [footerRefValue, setfooterRefValue] = useState(0);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        // console.log("scrolling up");
      } else if (y < window.scrollY) {
        // console.log("scrolling down");
      }
      setY(window.scrollY);
    },
    [y]
  );
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    // setheaderRefValue(headerRef.current.offsetTop);
    // setaboutRefValue(aboutRef.current.offsetTop);
    // setmemberRefValue(memberRef.current.offsetTop);
    // setspesialEpisodeRefValue(spesialEpisodeRef.current.offsetTop);
    // setsongRefValue(songRef.current.offsetTop);
    // setblogRefValue(blogRef.current.offsetTop);
    // setshopRefValue(shopRef.current.offsetTop);
    // setfooterRefValue(footerRef.current.offsetTop);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen bg-bee-blue h-auto flex flex-col overflow-auto">
      <div className="relative" ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About
        //   isMobile={isMobile}
        //   scrollPos={y}
        //   aboutRef={parseInt(aboutRefValue)}
        />
      </div>
      <div ref={memberRef}>
        <Members />
      </div>
      <div ref={spesialEpisodeRef}>
        <SpesialEpisode isMobile={isMobile} />
      </div>
      <div ref={songRef}>
        <Song />
      </div>
      <div ref={blogRef}>
        <Blog />
      </div>
      <div ref={shopRef}>
        <Shop />
      </div>
    </div>
  );
}

export default App;
