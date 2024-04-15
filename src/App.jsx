import { useState, useEffect } from "react";
import "./App.css";
import { Loading } from "./components/Loading";

function App() {

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

        <div><h1>TEAM ROCKET GO!</h1></div>
      }
    </div>
  );
}





export default App;