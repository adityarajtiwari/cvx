import "./styles.css";
import { useState,useEffect} from "react";
import Card from "./CardComp";
export default function App() {
  // fetch api
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <div className="App">
      {data.length > 0 ? <Card data={data}/>:<h1>Loading...</h1>}
     
    </div>
  );
}
