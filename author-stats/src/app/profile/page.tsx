import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthorWidget from "@/components/authorWidget";

export default function profile () {
    return(
        <div>
            <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
                <Header />
                <h2 className="text-center pb-10">Profile</h2>
                <div className="p-10">
                    <AuthorWidget />
                </div>
            </div>
            <Footer />
        </div>
    );
}