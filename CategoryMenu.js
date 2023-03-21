import { useState } from "react";
import { getTopHeadlines } from "../utils/NewsAPI";

const CategoryMenu = ({ onSelectCategory }) => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    onSelectCategory(value);
  };

  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
    </div>
  );
};

export default CategoryMenu;

