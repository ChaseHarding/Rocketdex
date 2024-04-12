import { useState, useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { DisplayCard } from "./components/DisplayCard";
import { Loading } from "./components/Loading";

function App() {
  //SEARCHBAR
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

  //LOADING SCREEN
  const [loading, setLoading] = useState(false);

  //Will trigger loading on first render of the page.
  useEffect(() => {
    setLoading(true)
    // IF USING API, could use fetch here and when getting a response from the server would remove the loading.
    // For testing/demonstration purposes, manually setting a load time using setTimeout.
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <div className="App">
      {loading ? 
      
        <Loading loading={loading}/> 
        
        :

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
      }
    </div>
  );
}





export default App;