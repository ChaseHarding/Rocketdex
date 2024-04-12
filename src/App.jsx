import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { DisplayCard } from "./components/DisplayCard";

function App() {
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = (query) => {
    if (!query) {
      setSearchResult("");
      return;
    }

    // Normalize the input for consistency
    const searchQuery = query.trim().toLowerCase();

    // Fetch the Pokemon data
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokemon not found");
        }
        return response.json();
      })
      .then((data) => {
        // Assuming you want to display the Pokemon's name
        setSearchResult(data.name);
      })
      .catch((error) => {
        // Handle the case where the Pokemon is not found
        setSearchResult("Pokemon not found");
      });
  };

  return (
    <div className="App">
      <div className="pokedex">
        <div className="red-container left">
        <div className="search-bar-container">
          <SearchBar onEnter={handleSearch} />
          {searchResult && <h1>{searchResult}</h1>}
        </div>
        <DisplayCard/>
        </div>
        <div className="red-container right">Test</div>
      </div>
    </div>
  );
}





export default App;