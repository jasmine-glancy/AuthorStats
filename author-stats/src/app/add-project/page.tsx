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
                            inputId="projectName"
                            placeholder="Or enter unsure if you are unsure"
                            isNumber={false}
                            isName={true}
                            validator="Please enter a value" />
                        <Input 
                            fieldLegend="What is your word count goal?"
                            inputId="wordCountGoal"
                            placeholder="50,000"
                            isNumber={true}
                            validator="Please enter a number" />
                        <Input 
                            fieldLegend="What is your start date?"
                            inputId="startDate"
                            validator="Please choose a date"
                            isDate={true}
                            date={startDate}
                            setDate={setStartDate}
                            pickerOpen={startPickerOpen}
                            setPickerOpen={setStartPickerOpen} />
                        <Input
                            fieldLegend="What is your end date?"
                            inputId="endDate"
                            validator="Please choose a date" 
                            isDate={true}
                            date={endDate}
                            setDate={setEndDate}
                            pickerOpen={endPickerOpen}
                            setPickerOpen={setEndPickerOpen} />

                        {/* TODO: Load in genres from MongoDB's database */}
                        <Select 
                            name="What is the primary genre of your project?"
                            selectId="primaryGenre"
                            options={
                                [
                                    { value: "Action/Adventure", label: "Action/Adventure" },
                                    { value: "Children's Fiction", label: "Children's Fiction" },
                                    { value: "Classic Fiction", label: "Classic Fiction" },
                                    { value: "Contemporary Fiction", label: "Contemporary Fiction" },
                                    { value: "Fantasy", label: "Fantasy" },
                                    { value: "Dark Fantasy", label: "Dark Fantasy" },
                                    { value: "Fairy Tales", label: "Fairy Tales" },
                                    { value: "Folktales", label: "Folktales" },
                                    { value: "Heroic Fantasy", label: "Heroic Fantasy" },
                                    { value: "High Fantasy", label: "High Fantasy" },
                                    { value: "Historical Fantasy", label: "Historical Fantasy" },
                                    { value: "Low Fantasy", label: "Low Fantasy" },
                                    { value: "Magical Realism", label: "Magical Realism" },
                                    { value: "Mythic Fantasy", label: "Mythic Fantasy" },
                                    { value: "Urban Fantasy", label: "Urban Fantasy" }
                                ]
                            }
                            defaultValue="Please make a selection" />
                        <Select 
                            name="Does your project have a secondary genre?"
                            selectId="secondaryGenre"
                            options={
                                [
                                    { value: "Action/Adventure", label: "Action/Adventure" },
                                    { value: "Children's Fiction", label: "Children's Fiction" },
                                    { value: "Classic Fiction", label: "Classic Fiction" },
                                    { value: "Contemporary Fiction", label: "Contemporary Fiction" },
                                    { value: "Fantasy", label: "Fantasy" },
                                    { value: "Dark Fantasy", label: "Dark Fantasy" },
                                    { value: "Fairy Tales", label: "Fairy Tales" },
                                    { value: "Folktales", label: "Folktales" },
                                    { value: "Heroic Fantasy", label: "Heroic Fantasy" },
                                    { value: "High Fantasy", label: "High Fantasy" },
                                    { value: "Historical Fantasy", label: "Historical Fantasy" },
                                    { value: "Low Fantasy", label: "Low Fantasy" },
                                    { value: "Magical Realism", label: "Magical Realism" },
                                    { value: "Mythic Fantasy", label: "Mythic Fantasy" },
                                    { value: "Urban Fantasy", label: "Urban Fantasy" }
                                ]
                            }
                            defaultValue="Please make a selection" />
                        
                    </div>
                    <button className="btn-primary mb-10 mt-5">
                        Add Project
                    </button>

                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}