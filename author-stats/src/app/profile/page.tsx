import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthorWidget from "@/components/authorWidget";
import Carousel from "@/components/carousel";
import ProjectCard from "@/components/projectCard";

export default function profile () {
    return(
        <div>
            <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
                <Header />
                <div className="pl-10 pr-10 grid grid-cols-2 gap-[5%]">
                    <AuthorWidget />
                    <div className="card bg-[var(--linen)] shadow-lg p-2 w-[28.5em] h-[26.5em]">
                        <Carousel />
                    </div> 
                </div>
                <div className="p-5 grid grid-cols-2 justify-center">
                    {/* TODO: For each project in the user's list, link to it through the project cards */}
                    <ProjectCard /> <ProjectCard /> <ProjectCard /> <ProjectCard />
                </div>
            </div>
            <Footer />
        </div>
    );
}