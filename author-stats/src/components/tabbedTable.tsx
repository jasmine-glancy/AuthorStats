"use client";

import { useEffect } from "react";
import { Tabs } from "flowbite";
import type { TabsOptions, TabsInterface, TabItem } from "flowbite";
import type { InstanceOptions } from "flowbite";


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
                id: "worldBuildingStats",
                triggerEl: document.querySelector("#worldBuildingStats-tab") as HTMLElement,
                targetEl: document.querySelector("#worldBuildingStats") as HTMLElement,
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
        tabs.show("graphs");
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
                id="worldBuildingStats-tab"
                type="button"
                role="tab"
                aria-controls="worldBuildingStats"
                aria-selected="false"
              >
                World-Building
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
            className="hidden rounded-[1em] border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 dark:bg-gray-800"
            id="progressLogs"
            role="tabpanel"
            aria-labelledby="progressLogs-tab"
          >
            {/* TODO: Show table with the date completed and entry word count */}
            {/* TODO: Each entry should have the option to delete it */}
            I'm baby shoreditch mumblecore church-key direct trade typewriter
            distillery. Ugh organic wayfarers tattooed selfies vexillologist pug
            craft beer before they sold out air plant mixtape same hot chicken
            praxis leggings. Butcher shoreditch mumblecore hashtag twee,
            gluten-free cornhole yuccie umami distillery live-edge freegan. Same
            viral beard cupping microdosing heirloom fixie leggings photo booth.
            Meh pug beard sartorial man braid jean shorts.
            {/* TODO: Inform user of when they will achieve their goal */}
          </div>
          <div
            className="hidden rounded-[1em] border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 dark:bg-gray-800"
            id="worldBuildingStats"
            role="tabpanel"
            aria-labelledby="worldBuildingStats-tab"
          >
            Sartorial adaptogen echo park PBR&B. Roof party keffiyeh live-edge,
            kickstarter raw denim tonx truffaut normcore. Same tattooed yr ugh
            coloring book. Keffiyeh vibecession cupping, banjo twee chia af. 3
            wolf moon man bun kickstarter, single-origin coffee forage chia
            neutral milk hotel tbh lo-fi actually taxidermy.
          </div>
          <div
            className="hidden rounded-[1em] border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 dark:bg-gray-800"
            id="averages"
            role="tabpanel"
            aria-labelledby="averages-tab"
          >
            {/* TODO: Calculate average writing time of day */}
            {/* TODO: Calculate writing speed in words per minute */}
            {/* TODO: Display average mood */}
            {/* TODO: Display average word count per day */}
            {/* TODO: Display average word count per session */}
            {/* TODO: Inform the user whether they spend more time writing or worldbuilding */}
            {/* TODO: Show where the user has written the most often */}
            Ugh poutine trust fund tumblr craft beer meh tousled air plant
            disrupt. Kinfolk cloud bread farm-to-table cronut. Shabby chic DSA
            raclette truffaut artisan. Pour-over marfa synth mukbang you
            probably haven't heard of them. Stumptown live-edge pickled
            literally, cloud bread migas everyday carry glossier DIY portland
            whatever.
          </div>
          <div
            className="hidden rounded-[1em] border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 dark:bg-gray-800"
            id="graphs"
            role="tabpanel"
            aria-labelledby="graphs-tab"
          >
            {/* TODO: Show overall progress */}
              {/* TODO: Show overall progress line chart */}
              {/* TODO: Show overall progress graph chart */}
              {/* TODO: Show overall progress table */}
            {/* TODO: Show daily word count progress */}
              {/* TODO: Show daily progress line chart */}
              {/* TODO: Show daily progress graph chart */}
              {/* TODO: Show daily progress table */}
            Celiac poutine microdosing 3 wolf moon disrupt af. Man bun DIY
            portland, dreamcatcher thundercats intelligentsia pickled waistcoat
            tofu. Pour-over woke quinoa, slow-carb pickled godard offal
            snackwave locavore celiac migas.
          </div>
        </div>
      </div>
    );
}