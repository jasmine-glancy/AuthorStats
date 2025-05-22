import Header from "@/components/header";
import Footer from "@/components/footer";
import Input from "@/components/input";

export default function login() {
    
    return (
        <div>
            <main className="flex gap-[32px] row-start-2 items-center sm:items-start">
                <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
                    <Header />
                    <div className="flex flex-col items-center justify-center pb-5">
                        <h2 className="font-bold pb-5">Log In</h2>

                        <Input isUsername={true} validator={
                            <>
                            Must be 3 to 30 characters
                            <br />
                            containing only letters, numbers or dash
                            </>
                        } placeholder="Username" />
                        <Input isPassword={true} validator={
                            <>
                                Must be more than 8 characters, including:
                                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                            </>
                        } placeholder="Password" />
                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-soft btn-primary text-[var(--tropical_indigo)] hover:text-[var(--dark_purple)] hover:bg-linear-to-t from-[var(--amethyst)] to-[var(--tropical_indigo)] btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mb-10 mt-5">
                            Login
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}