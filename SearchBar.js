import { useState } from "react";
import { searchArticles } from "../utils/NewsAPI";
import debounce from "lodash/debounce";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const search = async (query) => {
    const data = await searchArticles(query);
    onSearch(data);
  };

  const debouncedSearch = debounce(search, 500);

  return (
    <form>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
