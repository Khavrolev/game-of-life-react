import {
  countNeighbors,
  getCoordinates,
  getNextStep,
  getNeighbors,
} from "./getNextStep";

describe("Check getCoordinates", () => {
  it("Cell 0-0", () => {
    const coordinates = { row: 0, column: 0 };
    expect(getCoordinates("0-0")).toEqual(coordinates);
  });

  it("Cell 10-5", () => {
    const coordinates = { row: 10, column: 5 };
    expect(getCoordinates("10-5")).toEqual(coordinates);
  });

  it("Cell 9-7", () => {
    const coordinates = { row: 9, column: 7 };
    expect(getCoordinates("9-7")).toEqual(coordinates);
  });

  it("Not array", () => {
    expect(() => {
      getCoordinates("37");
    }).toThrow("Wrong input");
  });

  it("Not 2 members in array", () => {
    expect(() => {
      getCoordinates("3-7-4");
    }).toThrow("Wrong input");
  });

  it("Row is empty", () => {
    expect(() => {
      getCoordinates("-3");
    }).toThrow("Wrong input");
  });

  it("Column is empty", () => {
    expect(() => {
      getCoordinates("3-");
    }).toThrow("Wrong input");
  });
});

describe("Check getNeighbors", () => {
  const size = { rows: 50, columns: 50 };

  it("left upper corner", () => {
    const neighbor = [
      "49-49",
      "49-0",
      "49-1",
      "0-49",
      "0-1",
      "1-49",
      "1-0",
      "1-1",
    ];
    expect(getNeighbors(size, `0-0`)).toEqual(neighbor);
  });

  it("right upper corner", () => {
    const neighbor = [
      "49-48",
      "49-49",
      "49-0",
      "0-48",
      "0-0",
      "1-48",
      "1-49",
      "1-0",
    ];
    expect(getNeighbors(size, `0-${size.columns - 1}`)).toEqual(neighbor);
  });

  it("left bottom corner", () => {
    const neighbor = [
      "48-49",
      "48-0",
      "48-1",
      "49-49",
      "49-1",
      "0-49",
      "0-0",
      "0-1",
    ];
    expect(getNeighbors(size, `${size.rows - 1}-0`)).toEqual(neighbor);
  });

  it("right bottom corner", () => {
    const neighbor = [
      "48-48",
      "48-49",
      "48-0",
      "49-48",
      "49-0",
      "0-48",
      "0-49",
      "0-0",
    ];
    expect(getNeighbors(size, `${size.rows - 1}-${size.columns - 1}`)).toEqual(
      neighbor
    );
  });

  it("center", () => {
    const neighbor = [
      "19-19",
      "19-20",
      "19-21",
      "20-19",
      "20-21",
      "21-19",
      "21-20",
      "21-21",
    ];
    expect(getNeighbors(size, `20-20`)).toEqual(neighbor);
  });
});

describe("Check countNeighbors", () => {
  const size = { rows: 5, columns: 5 };
  const emptyBoard = [];
  const board = [
    "0-0",
    "0-2",
    "1-0",
    "1-2",
    "2-0",
    "2-2",
    "3-0",
    "3-2",
    "4-0",
    "4-2",
  ];

  it("empty board", () => {
    const cell = "1-6";
    expect(countNeighbors(emptyBoard, size, cell)).toBe(0);
  });

  it("left upper corner", () => {
    const cell = `0-0`;
    expect(countNeighbors(board, size, cell)).toBe(2);
  });

  it("right upper corner", () => {
    const cell = `0-${size.columns - 1}`;
    expect(countNeighbors(board, size, cell)).toBe(3);
  });

  it("left bottom corner", () => {
    const cell = `${size.rows - 1}-0`;
    expect(countNeighbors(board, size, cell)).toBe(2);
  });

  it("right bottom corner", () => {
    const cell = `${size.rows - 1}-${size.columns - 1}`;
    expect(countNeighbors(board, size, cell)).toBe(3);
  });

  it("center", () => {
    const cell = `2-2`;
    expect(countNeighbors(board, size, cell)).toBe(2);
  });
});

describe("Check getNextStep", () => {
  const size = { rows: 6, columns: 6 };

  it("should return board with 0 getting board with 0", () => {
    const board = [];
    const result = [];
    expect(getNextStep(board, size)).toEqual(result);
  });

  it("should return board with 0 getting board with 1", () => {
    const board = [
      "0-0",
      "0-1",
      "0-2",
      "0-3",
      "0-4",
      "1-0",
      "1-1",
      "1-2",
      "1-3",
      "1-4",
      "1-5",
      "2-0",
      "2-1",
      "2-2",
      "2-3",
      "2-4",
      "2-5",
      "3-0",
      "3-1",
      "3-2",
      "3-3",
      "3-4",
      "3-5",
      "4-0",
      "4-1",
      "4-2",
      "4-3",
      "4-4",
      "4-5",
      "5-0",
      "5-1",
      "5-2",
      "5-3",
      "5-4",
      "5-5",
    ];
    const result = [];
    expect(getNextStep(board, size)).toEqual(result);
  });

  it("Glider", () => {
    const board = ["0-1", "1-2", "2-0", "2-1", "2-2"];
    const result = ["1-0", "1-2", "2-1", "2-2", "3-1"];
    expect(getNextStep(board, size)).toEqual(result);
  });

  it("Blinker", () => {
    const board = ["0-1", "1-1", "2-1"];
    const result = ["1-0", "1-1", "1-2"];
    expect(getNextStep(board, size)).toEqual(result);
  });

  it("Loaf", () => {
    const board = ["0-1", "0-2", "1-0", "1-3", "2-1", "2-3", "3-2"];
    const result = ["0-1", "0-2", "1-0", "1-3", "2-1", "2-3", "3-2"];
    expect(getNextStep(board, size)).toEqual(result);
  });

  it("should return this very board", () => {
    const board = [
      "0-0",
      "0-2",
      "1-0",
      "1-2",
      "2-0",
      "2-2",
      "3-0",
      "3-2",
      "4-0",
      "4-2",
      "5-0",
      "5-2",
    ];
    const result = [
      "0-0",
      "0-2",
      "0-3",
      "0-5",
      "1-0",
      "1-2",
      "1-3",
      "1-5",
      "2-0",
      "2-2",
      "2-3",
      "2-5",
      "3-0",
      "3-2",
      "3-3",
      "3-5",
      "4-0",
      "4-2",
      "4-3",
      "4-5",
      "5-0",
      "5-2",
      "5-3",
      "5-5",
    ];
    expect(getNextStep(board, size)).toEqual(result);
  });

  //     it("should return this very board", () => {
  //       const gameBoard = [
  //         [1, 0, 1, 0, 0, 0],
  //         [1, 0, 1, 0, 0, 0],
  //         [1, 0, 1, 0, 0, 0],
  //         [1, 0, 1, 0, 0, 0],
  //         [1, 0, 1, 0, 0, 0],
  //         [1, 0, 1, 0, 0, 0],
  //       ];
  //       const result = [
  //         [1, 0, 1, 1, 0 1],
  //         [1, 0, 1, 1, 0 1],
  //         [1, 0, 1, 1, 0 1],
  //         [1, 0, 1, 1, 0 1],
  //         [1, 0, 1, 1, 0 1],
  //         [1, 0, 1, 1, 0 1],
  //       ];
  //       expect(getNextStep(gameBoard)).toEqual(result);
  //     });
  //   });
});
