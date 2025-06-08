import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ChartConfiguration,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function lineChart() {

    const labels = ["May 5, 2025", "May 7, 2025", "May 9, 2025", "May 10, 2025", "May 12, 2025"];
    const chartRef = useRef<Chart | null>(null);
    
    
    const dataLine = {
        labels: labels,
        datasets: [{
            label: "Progress",
            data: [100, 200, 140, 250, 500],
            backgroundColor: "#8D86C9",
            borderColor: "#CAC4CE",
            pointHoverBackgroundColor: "#9067C6",
            tension: 0.1,
            pointRadius: 5
        }]
    };

    const configLine: ChartConfiguration<"line"> = {
        type: "line",
        data: dataLine, 
    };

    useEffect(() => {
        const canvas = document.getElementById("chartLine") as HTMLCanvasElement;
        if (canvas) {
            const context = canvas.getContext("2d");
            if (context) {
                if (chartRef.current) {
                    chartRef.current.destroy();
                }
                chartRef.current = new Chart(context, configLine);
            }
        }
        
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return(
        <div className="rounded-[1em] border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4">
            <canvas id="chartLine" className="max-h-[20em]"></canvas>
        </div>
    );
}