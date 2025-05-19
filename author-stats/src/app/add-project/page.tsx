"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "../../components/footer";
import Input from "@/components/input";
import Select from "@/components/select";

export default function addProject() {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [startPickerOpen, setStartPickerOpen] = useState(false);
    const [endPickerOpen, setEndPickerOpen] = useState(false);
    const [endDate, setEndDate] = useState<Date | undefined>();
    
    return (
        <div>
            <main className="flex row-start-2 items-center sm:items-start">
            <div className="bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-fit-content w-[65em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
                <Header />
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold">Add a New Project</h2>
                    <div className="grid grid-cols-2 pt-5 gap-x-[5em]">
                        <Input 
                            fieldLegend="What is your project called?"
                            placeholder="Or enter unsure if you are unsure"
                            isNumber={false}
                            isName={true}
                            validator="Please enter a value" />
                        <Input 
                            fieldLegend="What is your word count goal?"
                            placeholder="50,000"
                            isNumber={true}
                            validator="Please enter a number" />
                        <Input 
                            fieldLegend="What is your start date?"
                            validator="Please choose a date"
                            isDate={true}
                            date={startDate}
                            setDate={setStartDate}
                            pickerOpen={startPickerOpen}
                            setPickerOpen={setStartPickerOpen} />
                        <Input
                            fieldLegend="What is your end date?"
                            validator="Please choose a date" 
                            isDate={true}
                            date={endDate}
                            setDate={setEndDate}
                            pickerOpen={endPickerOpen}
                            setPickerOpen={setEndPickerOpen} />
                        <Select />
                    </div>
                    <button className="btn btn-soft btn-primary text-[var(--tropical_indigo)] hover:text-[var(--dark_purple)] hover:bg-linear-to-t from-[var(--amethyst)] to-[var(--tropical_indigo)] btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mb-10 mt-5">
                        Add Project
                    </button>

                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}