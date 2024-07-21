export const rotateLeft = (
  orientation: "N" | "S" | "E" | "W",
): "N" | "S" | "E" | "W" => {
  switch (orientation) {
    case "N":
      return "W";
    case "W":
      return "S";
    case "S":
      return "E";
    case "E":
      return "N";
    default:
      return orientation;
  }
};

export const rotateRight = (
  orientation: "N" | "S" | "E" | "W",
): "N" | "S" | "E" | "W" => {
  switch (orientation) {
    case "N":
      return "E";
    case "E":
      return "S";
    case "S":
      return "W";
    case "W":
      return "N";
    default:
      return orientation;
  }
};
