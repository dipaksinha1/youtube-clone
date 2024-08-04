import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "./../redux/videosSlice";

const VideoConatiner = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state=>state.video);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
    console.log("video container - getVideos()");
  };

  useEffect(() => {
    console.log("VideoContainer -use effect")
    getVideos();
  }, []);
  return (
    <div className="w-full flex flex-wrap">
      {videos.map((video, index) => (
        <Link to={"/watch?v=" + video.id} key={video.etag}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoConatiner;
