import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "./../utils/constants";
import { cacheResults } from "../redux/searchSlice";
import { YOUTUBE_SEARCH_BY_SUGGESTION } from "../utils/constants";
import { GOOGLE_API_KEY } from "../utils/constants";
import VideoConatiner from "./VideoContainer";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const cacheSelector = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchQueryApi = async () => {
    if (searchQuery === "") {
      setSuggestion([]);
      return;
    }

    console.log("API Query - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheSelector[searchQuery]) setSuggestion(cacheSelector[searchQuery]);
      else {
        getSearchQueryApi();
      }
    }, 200);
    console.log(searchQuery);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

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
    <VideoConatiner videos={json[1]}/>
    };

  return (
    <div className="w-full grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="col-span-1 flex">
        <img
          className="h-8 cursor-pointer"
          onClick={() => {
            handleToggleMenu();
          }}
          alt="humburger"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256"
        />
        <a href="/">
          <img
            className="h-8 ml-2"
            alt="youtube"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="border-2 w-1/3 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              console.log("first");
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 100)}
          />
          <button className="border-y-2 border-r-2 rounded-r-full px-3 bg-slate-100">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-white py-2 px-5 w-[25rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li
                  onClick={() => {
                    console.log("Pp");
                    // getAllVideosFromSuggestion(s);
                  }}
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="profile"
          src="https://static-00.iconduck.com/assets.00/profile-icon-512x512-w0uaq4yr.png"
        />
      </div>
    </div>
  );
};

export default Head;
