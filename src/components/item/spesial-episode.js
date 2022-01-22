import { useRef } from "react";
import  HoneyVideoSvg  from "../../assets/svg/honeyVideo.svg";
import useVideoPlayer from "../../components/video/VideoPlayer";

const SpecialEpisodeItem = (props)=>{
    const videoElement = useRef(null);
    const {
      playerState,
      togglePlay,
      handleOnTimeUpdate,
      handleVideoProgress,
      handleVideoSpeed,
      toggleMute,
    } = useVideoPlayer(videoElement);
    return (
        <div className="flex mt-4 flex-col items-center w-auto">
        <div className="bg-bee-yellow p-2 w-full  md:w-648">
          <video
            src={`https://media.w3.org/2010/05/sintel/trailer_hd.mp4`}
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
            children={
                ()=>{
                    return <div className="bg-red-200">asdasds</div>
                }
            }
          />
{/*             
          <div className="controls">
            <div className="actions">
              <button onClick={togglePlay}>
                {!playerState.isPlaying ? (
                  <i className="bx bx-play"></i>
                ) : (
                  <i className="bx bx-pause"></i>
                )}
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={playerState.progress}
              onChange={(e) => handleVideoProgress(e)}
            />
            <select
              className="velocity"
              value={playerState.speed}
              onChange={(e) => handleVideoSpeed(e)}
            >
              <option value="0.50">0.50x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="2">2x</option>
            </select>
            <button className="mute-btn" onClick={toggleMute}>
              {!playerState.isMuted ? (
                <i className="bx bxs-volume-full"></i>
              ) : (
                <i className="bx bxs-volume-mute"></i>
              )}
            </button>
          </div> */}
        </div>
        <img src={HoneyVideoSvg} className="-mt-3" alt="" />
      </div>
    );
}

export default SpecialEpisodeItem