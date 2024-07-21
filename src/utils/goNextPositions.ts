import { MapData, Orientation } from "../types";

export const goNextPosition = (
  orientation: Orientation,
  newPosition: { x: number; y: number },
  map: MapData,
) => {
  switch (orientation) {
    case "N":
      return (newPosition.y = newPosition.y - 1 > 0 ? newPosition.y - 1 : 0);
    case "S":
      return (newPosition.y =
        newPosition.y + 1 > [map.height].length - 1 ? newPosition.y + 1 : 0);

    case "E":
      return (newPosition.x =
        newPosition.x + 1 > [map.width].length - 1 ? newPosition.x + 1 : 0);

    case "W":
      return (newPosition.x = newPosition.x - 1 > 0 ? newPosition.x - 1 : 0);

    default:
      break;
  }
};
