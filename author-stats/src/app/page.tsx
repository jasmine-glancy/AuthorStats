"use client";

import DayStreak from "@/components/dayStreak";
import { getServerSession } from "next-auth";
import Loading from "@/components/loading";
import RadialTacker from "@/components/radialTracker";
import TabbedTable from "@/components/tabbedTable";
import { options } from "./api/auth/[...nextauth]/options";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  // const session = await getServerSession(options);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!pageLoaded) {
    return <Loading />;
  }

  return (
    <div>
        <div className="max-w-[200em] bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] pt-10 text-[var(--dark_purple)] rounded-[2em]">
            <Header />
          <div className="flex justify-center p-5">
            <DayStreak />
            <RadialTacker totalTracker={true} />
            <RadialTacker />
          </div>
          <div className="p-5">
            <TabbedTable />
          </div>
        </div>
        <Footer />
    </div>
  );
}
