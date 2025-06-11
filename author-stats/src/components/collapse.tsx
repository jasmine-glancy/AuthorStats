
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
                        fieldLegend="Where were you working?"
                        options={["Library", "Office", "Home", "School", "Cafe"]}
                    />
                    <Select
                        isFillable={true}
                        fieldLegend="How were you working?"
                        options={["Laptop Computer", "Phone", "Pencil and Paper", "Desktop Computer"]}
                    />
                    {(selectedValue === "Writing" || selectedValue === "World-Building" || selectedValue === "Research") && (
                        <>
                            <Input
                                isNumber={true}
                                placeholder="Word Count"
                            />
                            <Select
                                options={["words this session", "total words"]}
                                defaultValue="words this session"
                            />
                        </>
                    )}
                    {(selectedValue === "Character Development") && 
                        <>
                            <Input
                                isNumber={true}
                                placeholder="Number of Characters"
                            />
                            <Select
                                options={["worked on this session", "created this session"]}
                                defaultValue="worked on this session"
                            />
                        </>
                    }
                    <Input
                        isTime={true}
                        fieldLegend="When did you start?"
                    />
                    <Input
                        isTime={true}
                        fieldLegend="When did you end?"
                    />
                </div>
            </div>
        </div>
    );
}