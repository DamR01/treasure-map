import { goNextPosition } from "../utils/goNextPositions";

const mockMap = {
  width: 3,
  height: 4,
  mountain: [
    [".", "M", "."],
    [".", ".", "M"],
    [".", ".", "."],
    [".", ".", "."],
  ],
  treasures: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [2, 2, 0],
  ],
};

describe("test goNextPosition function", () => {
  it("Should be able to move north", () => {
    expect(goNextPosition("N", { x: 1, y: 1 }, mockMap)).toEqual(0);
  });

  it("Should be able to move south", () => {
    expect(goNextPosition("S", { x: 1, y: 1 }, mockMap)).toEqual(2);
  });

  it("Should be able to move east", () => {
    expect(goNextPosition("E", { x: 1, y: 1 }, mockMap)).toEqual(2);
  });

  it("Should be able to move west", () => {
    expect(goNextPosition("W", { x: 1, y: 1 }, mockMap)).toEqual(0);
  });
});
