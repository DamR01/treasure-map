import { rotateLeft, rotateRight } from "../utils/rotate";

describe("test rotate functions", () => {
  it("Should be able to rotate left", () => {
    expect(rotateLeft("N")).toEqual("W");
  });

  it("Should be able to rotate right", () => {
    expect(rotateRight("S")).toEqual("W");
  });
});
