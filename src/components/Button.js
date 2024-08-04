import {
  YOUTUBE_SEARCH_BY_SUGGESTION,
  GOOGLE_API_KEY,
} from "./../utils/constants";

import { addVideos } from "./../redux/videosSlice";
import { useDispatch } from "react-redux";

const Button = ({ name }) => {
  const dispatch = useDispatch();
  const getAllVideosFromSuggestion = async (s) => {
    console.log("OKOKOKOKOK");

    const url = YOUTUBE_SEARCH_BY_SUGGESTION;

    const params = {
      part: "snippet",
      q: s,
      key: GOOGLE_API_KEY,
      type: "video",
      maxResults: 50,
    };

    // Construct the URL with query parameters
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryString}`;

    const data = await fetch(fullUrl);
    const json = await data.json();

    dispatch(addVideos(json.items));
    // <VideoConatiner videos={json[1]}/>
  };

  return (
    <button
      onClick={()=>getAllVideosFromSuggestion(name)}
      className="px-4 py-2 bg-gray-200 rounded-lg m-3"
    >
      {name}
    </button>
  );
};

export default Button;
