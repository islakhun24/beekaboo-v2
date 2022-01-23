/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react";
import About from "../pages/home/About";
import Blog from "../pages/home/Blog";
import Home from "../pages/home/Home";
import Members from "../pages/home/Members";
import Shop from "../pages/home/Shop";
import Song from "../pages/home/Song";
import SpesialEpisode from "../pages/home/SpesialEpisode";
import { useDispatch } from 'react-redux';
/* eslint-disable no-undef */
function App() {
  const dispatch = useDispatch();
  const [scrollPos, setScrollPos] = useState(window.scrollY);
  const [widthP, setWidthP] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const aboutRef = useRef(null);
  const memberRef = useRef(null);
  const homeRef = useRef(null);
  const spesialEpisodeRef = useRef(null);
  const songRef = useRef(null);
  const blogRef = useRef(null);
  const shopRef = useRef(null);
  const [headerRefValue, setheaderRefValue] = useState(0);
  const [aboutRefValue, setaboutRefValue] = useState(0);
  const [memberRefValue, setmemberRefValue] = useState(0);
  const [spesialEpisodeRefValue, setspesialEpisodeRefValue] = useState(0);
  const [songRefValue, setsongRefValue] = useState(0);
  const [blogRefValue, setblogRefValue] = useState(0);
  const [shopRefValue, setshopRefValue] = useState(0);
  const [footerRefValue, setfooterRefValue] = useState(0);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (scrollPos > window.scrollY) {
        // console.log("scrolling up");
      } else if (scrollPos < window.scrollY) {
        // console.log("scrolling down");
      }
      setScrollPos(window.scrollY);
      
    },
    [scrollPos]
  );
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    setScrollPos(window.scrollY);
    
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };

    
    
    
  }, [handleNavigation]);
  
  useEffect(() => {
    // setheaderRefValue(headerRef.current.offsetTop);
    setaboutRefValue(aboutRef.current.offsetTop);
    setmemberRefValue(memberRef.current.offsetTop);
    setspesialEpisodeRefValue(spesialEpisodeRef.current.offsetTop);
    setsongRefValue(songRef.current.offsetTop);
    setblogRefValue(blogRef.current.offsetTop);
    setshopRefValue(shopRef.current.offsetTop);
    // setfooterRefValue(footerRef.current.offsetTop);
    if (scrollPos > 56 && scrollPos < aboutRefValue) {
      setWidthP("8%");
    } else if (aboutRefValue < scrollPos && scrollPos < memberRefValue) {
      setWidthP("16.7%");
    } else if (memberRefValue < scrollPos && scrollPos < spesialEpisodeRefValue) {
      setWidthP("33.4%");
    } else if (spesialEpisodeRef < scrollPos && scrollPos < songRefValue) {
      setWidthP("50.1%");
    } else if (songRefValue < scrollPos && scrollPos < blogRefValue) {
      setWidthP("66.8%");
    } else if (blogRefValue < scrollPos && scrollPos < shopRefValue) {
      setWidthP("83.5%");
    } else if (shopRefValue < scrollPos && scrollPos < shopRefValue + 500) {
      setWidthP("100%");
    } else if (shopRefValue + 500 > scrollPos) {
      setWidthP("100%");
    } else if (scrollPos === 0) {
      setWidthP("0%");
    }
     if (scrollPos < 56) {
      dispatch({ type: 'PROGRESS', fixHeader: false, scrollPos: scrollPos });
    }
      dispatch({ type: 'PROGRESS', progressPercent: widthP, scrollPos: scrollPos });
    window.addEventListener("resize", handleResize);
  }, [ handleResize, scrollPos, dispatch]);

  return (
    <div className="w-screen bg-bee-blue h-auto flex flex-col overflow-hidden">
      <div className="relative w-screen h-auto" ref={homeRef}>
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
