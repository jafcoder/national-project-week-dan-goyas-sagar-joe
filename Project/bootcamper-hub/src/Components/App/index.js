// import logo from './logo.svg';
import "./index.css";
import Heading from "../Heading";
import Homepage from "../Homepage";
import Results from "../Results";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/videos/");
      const data = await response.json();
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Heading />
      <Homepage />
      <Results />
    </div>
  );
}

export default App;
