import { useState, useCallback } from "react";
import { Map } from "./components/Map";
import { Adventurer } from "./components/Adventurer";
import { parseInput } from "./parser";
import { ParsedData, Adventurer as AdventurerType } from "./types";
import "./App.css";

const initialInput = `
# Comment
C - 3 - 4
M - 1 - 0
M - 2 - 1
T - 0 - 3 - 2
T - 1 - 3 - 3
A - Lara - 1 - 1 - S - AADADAGGA
`;

export const App = () => {
  const [data] = useState<ParsedData>(parseInput(initialInput));
  const [adventurers, setAdventurers] = useState<AdventurerType[]>(
    data.adventurers,
  );

  const updatePosition = (updatedAdventurer: AdventurerType) => {
    setAdventurers((prev) =>
      prev.map((adv) =>
        adv.name === updatedAdventurer.name ? updatedAdventurer : adv,
      ),
    );
  };

  const generateOutputFile = useCallback(() => {
    const lines = [];

    lines.push(`C - ${data.map.width} - ${data.map.height}`);
    data.map.mountain.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === "M") lines.push(`M - ${x} - ${y}`);
      });
    });
    data.map.treasures.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell > 0) lines.push(`T - ${x} - ${y} - ${cell}`);
      });
    });
    adventurers.forEach(({ name, x, y, orientation, treasuresCollected }) => {
      lines.push(
        `A - ${name} - ${x} - ${y} - ${orientation} - ${treasuresCollected}`,
      );
    });

    return lines.join("\n");
  }, [data, adventurers]);

  const downloadOutput = () => {
    const output = generateOutputFile();
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "output.txt";
    link.click();
  };

  return (
    <div className="App">
      <Map map={data.map} adventurers={adventurers} />
      {adventurers.map((adventurer, index) => (
        <Adventurer
          key={index}
          adventurer={adventurer}
          map={data.map}
          updatePosition={updatePosition}
        />
      ))}
      <button onClick={downloadOutput}>Download Output</button>
    </div>
  );
};
