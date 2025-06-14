import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutBanner from "@/components/aboutBanner";

export default function aboutUs () {
    return(
        <div>
            <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
                <Header />
                <div className="flex flex-col justify-center">
                    <AboutBanner />
                <h1 className="text-center underline pb-[1em]">About Us</h1>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}