import React, { useRef, useEffect, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
} from "lucide-react";

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const VideoPlayer = ({
  url,
  width = "700px",
  height = "400px",
  onVideoEnd,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Volume range [0, 1]

  useEffect(() => {
    const video = videoRef.current;

    // Reset progress and playback state
    video.currentTime = 0;
    setProgress(0);
    setCurrentTime(0);
    setIsPlaying(false);

    const handleLoadedMetadata = () => {
      setDuration(video.duration); // Set the total duration
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime); // Update current time
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent); // Update progress
    };

    const handleEnded = () => {
      setIsPlaying(false);
      if (onVideoEnd) onVideoEnd();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [url, onVideoEnd]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !muted;
    setMuted(!muted);
  };

  const toggleFullscreen = () => {
    if (!fullscreen) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullscreen(!fullscreen);
  };

  const handleScrub = (e) => {
    const video = videoRef.current;
    const scrubTime =
      (e.nativeEvent.offsetX / e.target.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
  };

  const skipForward = () => {
    const video = videoRef.current;
    video.currentTime = Math.min(video.currentTime + 10, video.duration);
  };

  const skipBackward = () => {
    const video = videoRef.current;
    video.currentTime = Math.max(video.currentTime - 10, 0);
  };

  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden bg-black group`}
      style={{ width, height }}
    >
      <video
        ref={videoRef}
        src={url}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
      />

      {/* Progress Bar */}
      <div
        className="absolute bottom-16 left-0 w-full h-1 bg-gray-700 cursor-pointer"
        onClick={handleScrub}
      >
        <div
          className="h-full bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition duration-300">
        {/* Left Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlayPause}
            className="text-white hover:scale-110 transition"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button
            onClick={skipBackward}
            className="text-white hover:scale-110 transition"
          >
            <RotateCcw className="h-6 w-6" />
          </button>
          <button
            onClick={skipForward}
            className="text-white hover:scale-110 transition"
          >
            <RotateCw className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <button
              onClick={toggleMute}
              className="text-white hover:scale-110 transition mx-1"
            >
              {muted ? <VolumeX /> : <Volume2 />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 cursor-pointer"
            />
          </div>
        </div>

        {/* Center Gap */}
        <div className="flex-1" />

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <div className="text-white font-mono text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <button
            onClick={toggleFullscreen}
            className="text-white hover:scale-110 transition"
          >
            {fullscreen ? <Minimize /> : <Maximize />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
