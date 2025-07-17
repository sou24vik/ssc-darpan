import { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assests";
import { CglContext } from "../context/CglContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(CglContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes("notes") ||
      location.pathname.includes("previousYear") ||
      location.pathname.includes("lectures")
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} alt="" className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        alt=""
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
