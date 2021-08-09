import "./App.css";
import Block from "./Block";
import Header from "./Header";

function App() {
  const blocks = [];
  for (let i = 0; i < 5; i++) {
    blocks.push(<Block />);
  }
  return (
    <div className="App">
      <Header />
      {blocks}
    </div>
  );
}

export default App;
