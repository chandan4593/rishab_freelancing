import React, { useState } from "react";
import {FiSearch} from "react-icons/fi"
import "./SearchBar.scss";

const SeachBar = ({ onChange }) => {
    const [query, setquery] = useState("");
    return (
        <div>
            <div className="wrap">
                <div className="search">
                    <input
                        onChange={(e) => {
                            setquery(e.target.value);
                            onChange(e.target.value);
                        }}
                        type="text"
                        className="searchTerm"
                        placeholder="What are you looking for?"
                    ></input>
                    <button
                        type="submit"
                        className="searchButton"
                        onClick={() => {
                            onChange(query);
                        }}
                    >
                        <FiSearch/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeachBar;
