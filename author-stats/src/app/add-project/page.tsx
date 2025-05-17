import Header from "@/components/header";
import Input from "@/components/input";

export default function addProject() {
    
    return (
        <div>
            <main className="flex gap-[32px] row-start-2 items-center sm:items-start">
            <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
                <Header />
                <div className="flex flex-col items-center justify-center">
                    <h2 className="underline">Add a New Project</h2>
                    <Input fieldLegend="What is your project called? (You can change this later!)" placeholder="Or enter unsure if you are unsure" isOptional={true} />
                </div>
            </div>
            </main>
        </div>
    );
}