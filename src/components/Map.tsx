import React from "react";
import { MapData, Adventurer } from "../types";

interface MapProps {
  map: MapData;
  adventurers: Adventurer[];
}

export const Map = ({ map, adventurers }: MapProps) => {
  return (
    <div className="map">
      {Array.from({ length: map.height }).map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: map.width }).map((_, colIndex) => {
            let content = map.mountain[rowIndex][colIndex];
            let treasures = map.treasures[rowIndex][colIndex];

            adventurers.forEach((adventurer) => {
              if (adventurer.x === colIndex && adventurer.y === rowIndex) {
                content = "A";
              }
            });

            const adventurerOnCell = adventurers.find(
              (adventurer) =>
                adventurer.x === colIndex && adventurer.y === rowIndex,
            );

            if (adventurerOnCell) {
              content = "A";
            } else if (treasures > 0) {
              content = "T";
            }
            return (
              <div key={colIndex} className={`cell ${content}`}>
                {content}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
