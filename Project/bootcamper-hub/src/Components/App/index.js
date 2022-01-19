// import logo from './logo.svg';
import "./index.css";
import Heading from "../Heading";
import Homepage from "../Homepage";
import Results from "../Results";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/videos/useState`
      );

      const data = await response.json();
      console.log("data: ", data.payload);
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
