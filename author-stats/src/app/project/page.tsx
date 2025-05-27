"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import LineChart from "@/components/lineChart";
import ProjectBlurb from "@/components/projectBlurb";
import ProjectBreakdown from "@/components/projectBreakdown";
import ProjectHeader from "@/components/projectHeader";
import ToTopButton from "@/components/toTopButton";

export default function project() {
    return (
      <div>
        <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
          <Header />
          <ProjectHeader />
          <div className="p-5">
            <ProjectBlurb />
          </div>

          <div className="p-5">
            <ProjectBreakdown />
          </div>

          <div className="p-5">
            <h2 className="text-center pb-10">Project Progress</h2>
            <LineChart />
          </div>
        </div>
        <Footer />
        <ToTopButton />
      </div>
    );
}