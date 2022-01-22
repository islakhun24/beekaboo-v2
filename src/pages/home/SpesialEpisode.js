
import "./SpesialEpisode.css";
import bgspesialepisode from '../../assets/svg/bgspesialepisode.svg'
import  SpesialBeeSvg  from "../../assets/svg/spesialBee.svg";
// import "../video/video-player.css";
import SpecialEpisodeItem from "../../components/item/spesial-episode";
import SpecialEpisodeItemNot from "../../components/item/spesial-episode-not";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import { useCallback, useEffect, useState } from "react";
const SpesialEpisode = (props) => {
  const { isMobile } = props;
  const [viewportRef, embla] = useEmblaCarousel({
    align: "center",
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  
  return (
    <div style={{fontFamily: 'Sniglet'}} className="h-auto w-screen ">
        <div className="-mt-24" style={{
        }
        }>
            <img src={bgspesialepisode} className="mt-24" alt=""  />
        </div>

    {/* //     <div style={{backgroundColor:'#BAB4E4'}}  className="flex p-8 md:p-24 flex-col w-screen items-center">
    //         <h3 className="text-6xl font-normal text-center">Special Episode</h3>
    //         <h5 className="text-2xl mt-2 text-center">Only showing on the website</h5>
    //         <div className="flex flex-row-reverse ">
    //         <div style={{
    //         }} className="border-yellow-400 md:mt-40 md:-ml-40 p-8 border-8">
    //             <div>Happy Halloween – BeeKaBoo Kids Songs & Nursery Rhyme (Special Episode)</div>
    //             <div className="flex justify-between w-full mt-4">
    //             <div>Eps. 10</div>
    //                 <div>November 30, 2021</div>
    //             </div>
    //         </div>
    //         <div className="relative">
    //             <ReactPlayer    url='https://www.youtube.com/watch?v=bWUgZm_AE64' />
    //         </div>

    //         </div>
    //     </div>
    // </div> */}
    <div
    
      style={{
        fontFamily: "ArialRoundedMT",
        backgroundColor:'#BAB4E4'
      }}
      className="items-center p-8 md:p-24 justify-center flex flex-col"
    >
      <div className="flex flex-col relative">
        <img
          src={SpesialBeeSvg}
          alt=""
          className="absolute -top-20 right-0 h-40 w-auto"
        />
        <div className="text-6xl font-bold text-white">Special Episode</div>
      </div>
      <p className="text-2xl text-white font-semibold mt-2 ">
        Only showing on the website
      </p>
      <div className="flex mt-16 flex-row md:space-x-12 w-full overflow-x-auto items-center">
            <div className="flex  items-center justify-center  flex-grow">
                <SpecialEpisodeItem/>
            </div>
            <div className="md:flex  hidden items-center justify-center  flex-wrap">
                <SpecialEpisodeItemNot/>
            </div>
            <div className="md:flex  hidden items-center justify-center  flex-wrap">
                <SpecialEpisodeItemNot/>
            </div>
        </div>
      <p style={{
          fontFamily: 'Sniglet'
      }} className="text-right items-center justify-center w-full text-lg">Other special episode {'>'} </p>
    </div>
    </div>
  );
};

export default SpesialEpisode;
