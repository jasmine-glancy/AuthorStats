import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectHeader from "@/components/projectHeader";

export default function project() {
    return(
        <div>
            <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
                <Header />
                <ProjectHeader />
               
            </div>
            <Footer />
        </div>
    );
}