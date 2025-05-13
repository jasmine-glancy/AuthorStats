import DayStreak from "@/components/dayStreak";
import RadialTacker from "@/components/radialTracker";
import TabbedTable from "@/components/tabbedTable";
import Header from "@/components/header";

export default function Home() {
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
    </div>
  );
}
