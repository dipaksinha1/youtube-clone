import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex w-full">
        <iframe
          width="1400"
          height="400"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          ></iframe>
          <div className="border-2 border-solid w-full">
            <LiveChat/>
          </div>
          </div>
        <div className="p-2 m-2">
          <CommentsContainer />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
