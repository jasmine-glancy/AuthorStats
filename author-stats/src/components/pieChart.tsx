import { Chart, ChartConfiguration, registerables } from "chart.js";
import { useEffect } from "react";

export default function pieChart() {
    Chart.register(...registerables);
    const dataPie = {
        labels: ["Writing", "Worldbuilding", "Marketing"],
        datasets: [
        {
            label: "Time spent in hours",
            data: [300.25, 200.85, 25],
            backgroundColor: [
            "#9067C6",
            "#8D86C9",
            "#CAC4CE"
            ],
            hoverOffset: 10,
        },
        ],
    };

    const configPie: ChartConfiguration<"pie"> = {
        type: "pie",
        data: dataPie,
        options: {},
    };

    useEffect(() => {
        const canvas = document.getElementById("chartPie") as HTMLCanvasElement;
        if (canvas) {
            const context = canvas.getContext("2d");
            if (context) {
                new Chart(context, configPie);
            }
        }
    }, []);

    // TODO: Load in user's data
    return(
        <div className="rounded-[1em] flex justify-center items-center border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)]">
            <div className="w-[33%] mb-5">
                <canvas id="chartPie"></canvas>
            </div>
        </div>
    );
}