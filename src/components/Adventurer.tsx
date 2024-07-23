import React, { useState, useEffect } from "react";
import { Adventurer as AdventurerType, MapData } from "../types";
import { rotateLeft, rotateRight } from "../utils/rotate";
import { goNextPosition } from "../utils/goNextPositions";

interface AdventurerProps {
  adventurer: AdventurerType;
  map: MapData;
  updatePosition: (updatedAdventurer: AdventurerType) => void;
}

export const Adventurer = ({
  adventurer,
  map,
  updatePosition,
}: AdventurerProps) => {
  const [position, setPosition] = useState({
    x: adventurer.x,
    y: adventurer.y,
  });
  const [orientation, setOrientation] = useState(adventurer.orientation);
  const [moveIndex, setMoveIndex] = useState(0);
  const [treasuresCollected, setTreasuresCollected] = useState(
    adventurer.treasuresCollected || 0,
  );

  const moveAdventurer = () => {
    if (moveIndex >= adventurer.moves.length) return;

    const move = adventurer.moves[moveIndex];
    let newPosition = { ...position };
    let collectedTreasures = treasuresCollected;

    if (move === "A") {
      goNextPosition(orientation, newPosition, map);
      if (map.mountain[newPosition.y][newPosition.x] !== "M") {
        if (map.treasures[newPosition.y][newPosition.x] > 0) {
          collectedTreasures += 1;
          map.treasures[newPosition.y][newPosition.x] -= 1;
        }
        setPosition(newPosition);
        setTreasuresCollected(collectedTreasures);
      }
    }

    if (move === "G") {
      const newOrientation = rotateLeft(orientation);
      setOrientation(newOrientation);
    }

    if (move === "D") {
      const newOrientation = rotateRight(orientation);
      setOrientation(newOrientation);
    }

    setMoveIndex(moveIndex + 1);
    updatePosition({
      ...adventurer,
      x: newPosition.x,
      y: newPosition.y,
      treasuresCollected: collectedTreasures,
    });
  };

  useEffect(() => {
    const interval = setInterval(moveAdventurer, 1000);
    return () => clearInterval(interval);
  }, [moveIndex, position, orientation]);

  return (
    <div>
      <h2>{adventurer.name}</h2>
      <p>
        Position: ({position.x}, {position.y})
      </p>
      <p>Orientation: {orientation}</p>
      <p>Treasures Collected: {treasuresCollected}</p>
    </div>
  );
};
