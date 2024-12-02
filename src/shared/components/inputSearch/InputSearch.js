import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InputSearch.scss";
import SearchMagnifierPink from "../../../assets/images/search-magnifier-pink.svg";

function InputSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/individuals/search-results?query=${query}`);
    }
  };
  return (
    <div className="input-search">
      <div className="input-search__wrap">
        <input
          type="text"
          className="input-search__wrap__bar"
          placeholder="Search Individual By Name, UID, BAN, Phone"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span onClick={handleSearch} className="input-search__wrap__icon">
          <img src={SearchMagnifierPink} alt="search" />
        </span>
      </div>
    </div>
  );
}
export default InputSearch;
