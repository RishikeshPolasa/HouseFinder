const findHouse = () => {
  var matrix = [
    ["e", "e", "e", "e", "H"],
    ["e", "G", "e", "M", "M"],
    ["e", "G", "H", "M", "D"],
    ["M", "e", "P", "e", "e"],
    ["H", "e", "P", "e", "R"],
  ];
  var visited = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];
  // console.log(matrix);
  const helper = (matrix, i, j, map, count) => {
    if (i >= 5 || j >= 5 || i < 0 || j < 0 || visited[i][j]) return;
    visited[i][j] = true;

    if (matrix[i][j] !== "e" && matrix[i][j] !== "H") {
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
  let best_house = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matrix[i][j] === "H") {
        const map = new Map();
        helper(matrix, i, j, map, 0);
        // let val = 0;
        console.log(`${i} ${j}`);
        for (const val of map.values()) {
          console.log(val);
        }
        console.log(map.keys());
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
};
