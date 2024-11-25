import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import SongList from "../../components/SongList";

function SearchPage() {
  return (
    <div>
      <SearchBar />
      <SongList />
    </div>
  );
}

export default SearchPage;
