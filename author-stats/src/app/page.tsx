import DayStreak from "@/components/dayStreak";
import RadialTacker from "@/components/radialTracker";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen bg-linear-to-b from-[var(--dark_purple)] to-[var(--tropical_indigo)] sm:p-[5em]">
      <main className="flex gap-[32px] row-start-2 items-center sm:items-start">
        
        <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-[30em] w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
            <Header />
          <div className="flex justify-center">
            <DayStreak />
            <RadialTacker totalTracker={true} />
            <RadialTacker />
          </div>
        </div>
      </main>
    </div>
  );
}
