import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Search() {
  const history = useHistory();
  const [input, setInput] = useState();
  const handleChangeForm = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    history.push(`/search/${input}`);
    console.log("submit");
  };
  return (
    <div>
      <form className="relative" onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          name="search"
          className="border text-lg font-semibold md:text-sm h-12 md:h-9 w-full md:max-w-[160px] rounded pl-3"
          onChange={(event) => {
            handleChangeForm(event);
          }}
        />
        <button className="w-12 h-12 md:h-9 md:w-9 absolute top-0 right-0 text-lg hover:text-color-primary">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}
