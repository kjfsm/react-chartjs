import Chart from "chart.js";
import React, { useEffect, useRef, useState } from "react";

interface BarProps {
  labels: string[];
  data: number[];
}

export const Bar: React.FC<BarProps> = (props: BarProps) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [chart, setChart] = useState<Chart>();

  useEffect(() => {
    if (canvas.current) {
      const context = canvas.current.getContext("2d");
      if (context) {
        setChart(
          new Chart(context, {
            // The type of chart we want to create
            type: "bar",

            // The data for our dataset
            data: {
              labels: [],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "rgb(255, 99, 132)",
                  borderColor: "rgb(255, 99, 132)",
                  data: [],
                },
              ],
            },

            // Configuration options go here
            options: {},
          })
        );
      }
    }
  }, []);

  useEffect(() => {
    if (chart && chart.data.datasets) {
      chart.data.labels = props.labels;
      chart.data.datasets[0].data = props.data;
      chart.update();
    }
  }, [chart, props.data, props.labels]);

  return <canvas id="canvas" ref={canvas} />;
};
