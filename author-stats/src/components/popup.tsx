
import Collapse from "./collapse";
import LogMood from "./logMood";
import Select from "./select";
import { useEffect, useState } from "react";

type PopupProps = {
  reference: React.RefObject<HTMLDialogElement | null>;
};

export default function Popup({ reference }: PopupProps) {
    const [selectedValue, setSelectedValue] = useState("");

    const handleCollapseSelectChange = (selected: { value: string; label: string } | null) => {
        // Render an empty string if selected?.value is undefined
        setSelectedValue(selected?.value ?? "");
        console.log(selected?.value);
    }
    // Input options change based on option

    return(
        <div>
            <dialog ref={reference} className="modal">
                <div className="modal-box max-w-[40em] min-h-[30em]">
                    {/* TODO: If user was researching, ask for time instead of words */}
                    <h3 className="font-bold text-lg text-center text-[var(--tropical_indigo)]">Add Session</h3>
                    <h4 className="text-center pb-2">How did you feel while creating?</h4>
                    <LogMood />
                    <div className="flex justify-center">
                        <Select
                            defaultValue="Please make a selection"
                            selectId="workedOn"
                            name="What did you work on?"
                            options={
                                [
                                    { value: "Please make a selection", label: "Please Make a Selection", isDisabled: true },
                                    { value: "Writing", label: "Writing" },
                                    { value: "World-Building", label: "World-Building" },
                                    { value: "Character Development", label: "Character Development" },
                                    { value: "Research", label: "Research" }
                                ]
                            }
                            dynamicSelect={true}
                            onChange={handleCollapseSelectChange}
                        />
                    </div>
                    {selectedValue === "Writing" && <Collapse selectedValue="Writing" />}
                    {selectedValue === "World-Building" && <Collapse selectedValue="World-Building" />}
                    {selectedValue === "Character Development" && <Collapse selectedValue="Character Development" />}
                    {selectedValue === "Research" && <Collapse selectedValue="Research" />}

                    <div className="flex justify-center">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}