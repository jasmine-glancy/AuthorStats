import Header from "@/components/header";

export default function addProject() {
    
    return (
        <div>
            <main className="flex gap-[32px] row-start-2 items-center sm:items-start">
            <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
                <Header />
                <div className="flex flex-col items-center justify-center">
                    <h2 className="underline">Add a New Project</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">What is your name?</legend>
                        <input type="text" className="input" placeholder="Type here" />
                        <p className="label">Optional</p>
                    </fieldset>
                </div>
            </div>
            </main>
        </div>
    );
}