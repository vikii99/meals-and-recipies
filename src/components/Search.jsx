import { useGlobalContext } from "../context";
import { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal} = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="whats your favourite meal?"
          className="form-input"
          value={text}
          onChange={handleChange}
        />

        <button className="btn" type="submit">
          Search
        </button>

        <button
          className="btn btn-hipster"
          type="button"
          onClick={handleRandomMeal}
        >
          suprise Me!
        </button>
      </form>
    </header>
  );
};

export default Search;
