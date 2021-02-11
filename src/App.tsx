import React, { useState } from "react";
import { Bar } from "./bar";

export const App: React.FC = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);
  const [inputLabel, setInputLabel] = useState("");
  const [inputData, setInputData] = useState("");
  return (
    <div className="App">
      <input
        value={inputLabel}
        onChange={(e) => setInputLabel(e.target.value)}
      />
      <input value={inputData} onChange={(e) => setInputData(e.target.value)} />
      <button
        onClick={() => {
          const num = parseInt(inputData, 10);
          if (isNaN(num)) {
            return;
          }
          setLabels((prev) => [...prev, inputLabel]);
          setData((prev) => [...prev, num]);
        }}
      >
        add
      </button>
      <Bar labels={labels} data={data} />
    </div>
  );
};
