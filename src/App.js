import "./App.css";
import Block from "./Block";

function App() {
  const blocks = [];
  for (let i = 0; i < 5; i++) {
    blocks.push(<Block />);
  }
  return <div className="App">{blocks}</div>;
}

export default App;
