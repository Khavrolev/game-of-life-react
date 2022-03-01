import { getNextStep, getNeighbors } from "./getNextStep";

describe("Check getNeighbors", () => {
  const gameBoard = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
  ];

  it("left upper corner", () => {
    expect(getNeighbors(gameBoard, 0, 0)).toBe(2);
  });

  it("right upper corner", () => {
    expect(getNeighbors(gameBoard, 0, gameBoard[0].length - 1)).toBe(3);
  });

  it("left bottom corner", () => {
    expect(getNeighbors(gameBoard, gameBoard.length - 1, 0)).toBe(2);
  });

  it("right bottom corner", () => {
    expect(
      getNeighbors(gameBoard, gameBoard.length - 1, gameBoard[0].length - 1)
    ).toBe(3);
  });

  it("center", () => {
    expect(getNeighbors(gameBoard, 2, 2)).toBe(2);
  });

  describe("Check getNextStep", () => {
    it("should return board with 0 getting board with 0", () => {
      const gameBoard = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      expect(getNextStep(gameBoard)).toEqual(result);
    });

    it("should return board with 0 getting board with 1", () => {
      const gameBoard = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ];

      const result = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      expect(getNextStep(gameBoard)).toEqual(result);
    });

    it("Glider", () => {
      const gameBoard = [
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = [
        [0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      expect(getNextStep(gameBoard)).toEqual(result);
    });

    it("Blinker", () => {
      const gameBoard = [
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = [
        [0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      expect(getNextStep(gameBoard)).toEqual(result);
    });

    it("Loaf", () => {
      const gameBoard = [
        [0, 1, 1, 0, 0, 0],
        [1, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const result = [
        [0, 1, 1, 0, 0, 0],
        [1, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      expect(getNextStep(gameBoard)).toEqual(result);
    });

    it("should return this very board", () => {
      const gameBoard = [
        [1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0],
      ];

      const result = [
        [1, 0, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 1, 1],
      ];

      expect(getNextStep(gameBoard)).toEqual(result);
    });
  });
});
