import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthorWidget from "@/components/authorWidget";
import Carousel from "@/components/carousel";

export default function profile () {
    return(
        <div>
            <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
                <Header />
                <div className="p-10 grid grid-cols-2 mr-[13em]">
                    <AuthorWidget />
                    <div className="card bg-[var(--linen)] shadow-lg p-2 w-[37em] h-[26.5em]">
                        <Carousel />
                    </div> 
                </div>

            </div>
            <Footer />
        </div>
    );
}