import { Chart, ChartConfiguration } from "chart.js";
import { useEffect } from "react";

export default function barChart() {
    const labels = ["May 5, 2025", "May 7, 2025", "May 9, 2025", "May 10, 2025", "May 12, 2025"];
    const dataBar = {
        labels: labels,
        datasets: [{
            label: "Progress",
            data: [100, 200, 140, 250, 500],
            backgroundColor: [
                "#242038b9",
                "#9067c6b6",
                "#8d86c9c4",
                "#cac4cec0",
                "#f7ece1c2"
            ],
            borderColor: [
                "#242038",
                "#9067C6",
                "#8D86C9",
                "#CAC4CE",
                "#F7ECE1"
            ],
            borderWidth: 1
        }]
    };

    const configBar: ChartConfiguration<"bar"> = {
        type: "bar",
        data: dataBar,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

        useEffect(() => {
        const canvas = document.getElementById("chartBar") as HTMLCanvasElement;
        if (canvas) {
            const context = canvas.getContext("2d");
            if (context) {
                new Chart(context, configBar);
            }
        }
    }, []);

    return(
        <div className="rounded-[1em] border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4">
            <canvas id="chartBar" className="max-h-[20em]"></canvas>
        </div>
    );
}