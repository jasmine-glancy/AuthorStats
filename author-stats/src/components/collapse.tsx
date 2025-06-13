
import { useState } from "react";
import Input from "./input";
import Select from "./select";

type CollapseProps = {
    selectedValue?: string;
}

export default function collapse({ selectedValue }: CollapseProps) {
    const [open, setOpen] = useState(false);

    return(
        <div>
            <div className={`collapse collapse-arrow${open ? " collapse-open" : ""}`}>
                <div 
                    className="collapse-title font-semibold text-[var(--amethyst)] cursor-pointer"
                    onClick={() => setOpen((prev) => !prev)}>
                        More Options...
                </div>                    
                <div className="collapse-content grid grid-cols-2 gap-[2%]">

                    <Select
                        isFillable={true}
                        selectId="workLocations"
                        fieldLegend="Where were you working?"
                        options={
                            [
                                { value: "Library", label: "Library" },
                                { value: "Office", label: "Office" },
                                { value: "Home", label: "Home" },
                                { value: "School", label: "School" },
                                { value: "Cafe", label: "Cafe" }
                            ]
                        }
                    />
                    <Select
                        isFillable={true}
                        selectId="workTools"
                        fieldLegend="How were you working?"
                        options={
                            [
                                { value: "Laptop Computer", label: "Laptop Computer" },
                                { value: "Phone", label: "Phone" },
                                { value: "Home", label: "Home" },
                                { value: "Pencil and Paper", label: "Pencil and Paper" },
                                { value: "Desktop Computer", label: "Desktop Computer" }
                            ]
                        }
                    />
                    {(selectedValue === "Writing" || selectedValue === "World-Building" || selectedValue === "Research") && (
                        <>
                            <Input
                                isNumber={true}
                                inputId="wordCount"
                                placeholder="Word Count"
                            />
                            <Select
                                selectId="wordTotal"
                                options={
                                    [
                                        { value: "words this session", label: "words this session" },
                                        { value: "total words", label: "total words" }
                                    ]
                                }
                                defaultValue="words this session"
                            />
                        </>
                    )}
                    {(selectedValue === "Character Development") && 
                        <>
                            <Input
                                isNumber={true}
                                inputId="numChars"
                                placeholder="Number of Characters"
                            />
                            <Select 
                                selectId="wordTotal"
                                options={
                                    [
                                        { value: "worked on this session", label: "worked on this session" },
                                        { value: "created this session", label: "created this session" }
                                    ]
                                }
                                defaultValue="worked on this session"
                            />
                        </>
                    }
                    <Input
                        isTime={true}
                        inputId="startTime"
                        fieldLegend="When did you start?"
                    />
                    <Input
                        isTime={true}
                        inputId="endTime"
                        fieldLegend="When did you end?"
                    />
                </div>
            </div>
        </div>
    );
}