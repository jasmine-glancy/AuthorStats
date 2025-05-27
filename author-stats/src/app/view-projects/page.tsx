"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectCard from "@/components/projectCard";
import ToTopButton from "@/components/toTopButton";

export default function viewProjects() {
    return (
        <div>
            <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
                <Header />
                
                <div className="flex flex-wrap justify-center gap-[5px]">
                    <ProjectCard /> <ProjectCard /> <ProjectCard />
                </div>
            </div>
            <Footer />
            <ToTopButton />
        </div>
    );
}