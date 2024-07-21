export interface MapData {
  width: number;
  height: number;
  mountain: string[][];
  treasures: number[][];
}

export type Orientation = "N" | "S" | "E" | "W";

export interface Adventurer {
  name: string;
  x: number;
  y: number;
  orientation: Orientation;
  moves: string[];
  treasuresCollected?: number;
}

export interface ParsedData {
  map: MapData;
  adventurers: Adventurer[];
}
