import { ParsedData, MapData, Adventurer, Orientation } from "./types";

export const parseInput = (input: string): ParsedData => {
  const lines = input
    .split("\n")
    .filter((line) => line.trim() && !line.startsWith("#"));
  let map: MapData = { width: 0, height: 0, mountain: [], treasures: [] };
  let adventurers: Adventurer[] = [];

  lines.forEach((line) => {
    const lineParts = line.split("-").map((part) => part.trim());
    switch (lineParts[0]) {
      case "C":
        map.width = +lineParts[1];
        map.height = +lineParts[2];
        map.mountain = Array.from({ length: map.height }, () =>
          Array(map.width).fill("."),
        );
        map.treasures = Array.from({ length: map.height }, () =>
          Array(map.width).fill(0),
        );
        break;
      case "M":
        map.mountain[+lineParts[2]][+lineParts[1]] = "M";
        break;
      case "T":
        map.treasures[+lineParts[2]][+lineParts[1]] = +lineParts[3];
        break;
      case "A":
        adventurers.push({
          name: lineParts[1],
          x: +lineParts[2],
          y: +lineParts[3],
          orientation: lineParts[4] as Orientation,
          moves: lineParts[5].split(""),
        });
        break;
      default:
        break;
    }
  });

  return { map, adventurers };
};
