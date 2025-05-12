"use client";

import AverageWidget from "./averageWidget";
import BarChart from "./barChart";
import LineChart from "./lineChart";
import { useEffect } from "react";
import { Tabs } from "flowbite";
import ProgressTable from "./progressTable";
import PieChart from "./pieChart";
import type { TabsOptions, TabsInterface, TabItem } from "flowbite";
import type { InstanceOptions } from "flowbite";
import WritingSpeedWidget from "./writingSpeedWidget";


export default function tabbedTable() {
    useEffect(() => {
        const tabsElement = document.getElementById('tabs');

        if (!tabsElement) {
            throw new Error("Element with id 'tabs' not found");
        }

        // create an array of objects with the id, trigger element (eg. button), and the content element
        const tabElements: TabItem[] = [
            {
                id: "progressLogs",
                triggerEl: document.querySelector("#progressLogs-tab") as HTMLElement,
                targetEl: document.querySelector("#progressLogs") as HTMLElement,
            },
            {
                id: "timeAllocations",
                triggerEl: document.querySelector("#timeAllocations-tab") as HTMLElement,
                targetEl: document.querySelector("#timeAllocations") as HTMLElement,
            },
            {
                id: "averages",
                triggerEl: document.querySelector("#averages-tab") as HTMLElement,
                targetEl: document.querySelector("#averages") as HTMLElement,
            },
            {
                id: "graphs",
                triggerEl: document.querySelector("#graphs-tab") as HTMLElement,
                targetEl: document.querySelector("#graphs") as HTMLElement,
            },
        ];

        // options with default values
        const options: TabsOptions = {
            defaultTabId: "averages",
            activeClasses:
                "text-[var(--amethyst)] hover:text-[var(--linen)]",
            inactiveClasses:
                "text-[var(--dark_purple)] hover:text-[var(--linen)] border-[var(--amethyst)] hover:border-[var(--amethyst)] dark:border-[var(--amethyst)] dark:hover:text-[var(--linen)]",
            onShow: () => {
                console.log("tab is shown");
            },
        };

        // instance options with default values
        const instanceOptions: InstanceOptions = {
        id: "tabs",
        override: true
        };

        /*
        * tabsElement: parent element of the tabs component (required)
        * tabElements: array of tab elements (required)
        * options (optional)
        * instanceOptions (optional)
        */
        const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

        // open tab item based on id
        tabs.show("averages");
    }, []);

    return (
      <div>
        <div className="mb-4 border-b border-[var(--tropical_indigo)]">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center text-[var(--dark_purple)]"
            id="tabs"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-[var(--amethyst)] hover:text-[var(--tropical_indigo)] dark:hover:text-[var(--linen)]"
                id="progressLogs-tab"
                type="button"
                role="tab"
                aria-controls="progressLogs"
                aria-selected="false"
              >
                Progress Logs
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-[var(--amethyst)] hover:text-[var(--tropical_indigo)] dark:hover:text-[var(--linen)]"
                id="timeAllocations-tab"
                type="button"
                role="tab"
                aria-controls="timeAllocations"
                aria-selected="false"
              >
                Time Allocations
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-[var(--amethyst)] hover:text-[var(--tropical_indigo)] dark:hover:text-[var(--linen)]"
                id="averages-tab"
                type="button"
                role="tab"
                aria-controls="averages"
                aria-selected="false"
              >
                Averages
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-[var(--amethyst)] hover:text-[var(--tropical_indigo)] dark:hover:text-[var(--linen)]"
                id="graphs-tab"
                type="button"
                role="tab"
                aria-controls="graphs"
                aria-selected="false"
              >
                Graphs
              </button>
            </li>
          </ul>
        </div>
        <div id="tabContentExample">
          <div
            id="progressLogs"
            role="tabpanel"
            aria-labelledby="progressLogs-tab"
          >
            {/* TODO: Show table with the date completed and entry word count */}
            <div className="flex inline-flex gap-[4em]">
              <ProgressTable progLog={true} />
              <ProgressTable dailyLog={true} />
              <ProgressTable overallProgGoals={true} />
            </div>
            {/* TODO: Each entry should have the option to delete it */}
            {/* TODO: Inform user of when they will achieve their goal */}
          </div>
          <div
            className="hidden"
            id="timeAllocations"
            role="tabpanel"
            aria-labelledby="timeAllocations-tab"
          >
            {/* TODO: Show time spent character building */}
            {/* TODO: Show time spent world building */}
            <PieChart />
          </div>
          <div
            className="hidden"
            id="averages"
            role="tabpanel"
            aria-labelledby="averages-tab"
          >
            <div className="grid grid-cols-4 gap-[1em]">
              <WritingSpeedWidget />
              <AverageWidget averageMood={true} />
              <AverageWidget averageSessionWriteTime={true} />
              <AverageWidget averageWordCountPerDay={true} />
              <AverageWidget writingOrWorldBuilding={true} />
              <AverageWidget averageWritingPlace={true} />
              <AverageWidget mostContributedTo={true} />
              <AverageWidget mostWritten={true} />
            </div>
          </div>
          <div
            className="hidden"
            id="graphs"
            role="tabpanel"
            aria-labelledby="graphs-tab"
          >
            {/* TODO: Show overall progress */}
            <BarChart />
              {/* TODO: Show overall progress line chart */}
              {/* TODO: Show overall progress bar chart */}
              {/* TODO: Show overall progress table */}
            {/* TODO: Show daily word count progress */}
            <LineChart />
              {/* TODO: Show daily progress line chart */}
              {/* TODO: Show daily progress bar chart */}
              {/* TODO: Show daily progress table */}
          </div>
        </div>
      </div>
    );
}