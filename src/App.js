import { useState } from "react";
import Body from "./Components/Body/Body";
// import Header from "./Components/Header/Header";

function App() {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 0.75 });
  return (
    <div className="App">
      {/* <Header color={color}></Header> */}
      <Body color={color} setColor={setColor}></Body>
    </div>
  );
}

export default App;
