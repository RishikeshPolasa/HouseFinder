import { useState } from "react";
import "./App.css";
import Block from "./Block";
import Header from "./Header";

function App() {
  const blocks = [];
  const [matrix, setMatrix] = useState([
    ["Empty", "Empty", "Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty", "Empty", "Empty"],
  ]);
  const duplicate = [
    ["Empty", "Empty", "Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty", "Empty", "Empty"],
  ];
  const change = (row, col, e) => {
    // let index = e.target.attributes[2].value.split("");
    // let first = parseInt(index[0]);
    // let sec = parseInt(index[1]);
    // setMatrix(first,sec) = e.target.value;

    // setMatrix[(index[0], index[1])] = e.target.value;
    // console.log(setMatrix);
    let copy = [...matrix];
    if (e.key === "Enter") {
      if (
        e.target.value === "House" ||
        e.target.value === "Gym" ||
        e.target.value === "TeaShop" ||
        e.target.value === "Restaurant" ||
        e.target.value === "Parking" ||
        e.target.value === "Market"
      ) {
        if (e.target.value === "") {
          copy[row][col] = "Empty";
        } else {
          copy[row][col] = e.target.value;
        }
      } else {
        alert("Enter valid name as specified on left side");
        copy[row][col] = "Empty";
      }

      e.target.value = "";
      setMatrix(copy);
      // console.log(matrix);
    }
  };
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      blocks.push(<Block />);
    }
  }
  for (let i = 0; i < 4; i++) {
    blocks.push(<Block />);
  }
  // finding best house
  const findHouse = () => {
    var visited = [
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ];
    // console.log(matrix);
    const helper = (matrix, i, j, map, count) => {
      if (i >= 4 || j >= 5 || i < 0 || j < 0 || visited[i][j]) return;
      visited[i][j] = true;

      if (matrix[i][j] !== "Empty" && matrix[i][j] !== "House") {
        // let val = map[matrix[i][j]];
        let val = map.get(matrix[i][j]) || Number.MAX_SAFE_INTEGER;
        // console.log(val);
        // let val = map[matrix[i][j]];
        // map.set(matrix[i][j], count);
        // if (val < count) map[matrix[i][j]] = val;
        if (count < val) map.set(matrix[i][j], count);
      }
      helper(matrix, i + 1, j, map, count + 1);
      helper(matrix, i, j + 1, map, count + 1);
      helper(matrix, i - 1, j, map, count + 1);
      helper(matrix, i, j - 1, map, count + 1);
      // helper(matrix, i - 1, j - 1, map, count + 1);
      // helper(matrix, i - 1, j + 1, map, count + 1);
      // helper(matrix, i + 1, j - 1, map, count + 1);
      // helper(matrix, i + 1, j + 1, map, count + 1);
      visited[i][j] = false;
    };
    let max = Number.MAX_SAFE_INTEGER;
    let row, col;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 5; j++) {
        if (matrix[i][j] === "House") {
          const map = new Map();
          helper(matrix, i, j, map, 0);
          // let val = 0;
          console.log(`${i} ${j}`);
          let sum = 0;
          for (const val of map.values()) {
            sum += val;
          }
          if (sum < max) {
            max = sum;
            row = i;
            col = j;
          }
          // console.log(map.keys());

          // console.log(best_house);
          // for (const key in map.keys()) {
          //   console.log(`${key} is ${map.get(key)}`);
          // }
          console.log("####");
          // console.log(val);
          // best_house = Math.min(best_house, val);
          // console.log(best_house);
        }
      }
    }
    console.log(row, col);
    setMatrix(duplicate);
    // console.log(duplicate);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <table>
          <tr key={0}>
            <td key={0}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(0, 0, e)}
              />
              <h3>{matrix[0][0]}</h3>
            </td>
            <td key={1}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(0, 1, e)}
              />
              <h3>{matrix[0][1]}</h3>
            </td>
            <td key={2}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(0, 2, e)}
              />
              <h3>{matrix[0][2]}</h3>
            </td>
            <td key={3}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(0, 3, e)}
              />
              <h3>{matrix[0][3]}</h3>
            </td>
            <td key={4}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(0, 4, e)}
              />
              <h3>{matrix[0][4]}</h3>
            </td>
          </tr>
          <tr key={1}>
            <td key={0}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(1, 0, e)}
              />
              <h3>{matrix[1][0]}</h3>
            </td>
            <td key={1}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(1, 1, e)}
              />
              <h3>{matrix[1][1]}</h3>
            </td>
            <td key={2}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(1, 2, e)}
              />
              <h3>{matrix[1][2]}</h3>
            </td>
            <td key={3}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(1, 3, e)}
              />
              <h3>{matrix[1][3]}</h3>
            </td>
            <td key={4}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(1, 4, e)}
              />
              <h3>{matrix[1][4]}</h3>
            </td>
          </tr>
          <tr key={2}>
            <td key={0}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(2, 0, e)}
              />
              <h3>{matrix[2][0]}</h3>
            </td>
            <td key={1}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(2, 1, e)}
              />
              <h3>{matrix[2][1]}</h3>
            </td>
            <td key={2}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(2, 2, e)}
              />
              <h3>{matrix[2][2]}</h3>
            </td>
            <td key={3}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(2, 3, e)}
              />
              <h3>{matrix[2][3]}</h3>
            </td>
            <td key={4}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(2, 4, e)}
              />
              <h3>{matrix[2][4]}</h3>
            </td>
          </tr>
          <tr key={3}>
            <td key={0}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(3, 0, e)}
              />
              <h3>{matrix[3][0]}</h3>
            </td>
            <td key={1}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(3, 1, e)}
              />
              <h3>{matrix[3][1]}</h3>
            </td>
            <td key={2}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(3, 2, e)}
              />
              <h3>{matrix[3][2]}</h3>
            </td>
            <td key={3}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(3, 3, e)}
              />
              <h3>{matrix[3][3]}</h3>
            </td>
            <td key={4}>
              <input
                type="text"
                placeholder="Add any value..."
                data-position="01"
                onKeyPress={(e) => change(3, 4, e)}
              />
              <h3>{matrix[3][4]}</h3>
            </td>
          </tr>
        </table>
      </div>
      <button onClick={findHouse}>Find</button>
    </div>
  );
}

export default App;
