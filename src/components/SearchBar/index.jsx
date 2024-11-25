import { useRef } from "react";
import { useState } from "react";
import { useSearchTextStore } from "../../stores/useSearchTextStore";
import "./index.css";

function SearchBar() {
  const { setSearchText } = useSearchTextStore();

  const inputRef = useRef(); //hook, 특정 dom 요소에 대한 실질적인 ref을 control 하고 싶을 때?
  // uncontrolled 방식
  return (
    <div className="SearchBar">
      <input ref={inputRef} className="SearchBar__input" />
      <button
        className="SearchBar__button"
        onClick={() => {
          setSearchText(inputRef.current.value);
        }}
      >
        검색
      </button>
    </div>
  );
}

export default SearchBar;
