
import { DayPicker } from "react-day-picker";

type inputTypes = {
    fieldLegend: string;
    placeholder?: string;
    isOptional?: boolean;
    isNumber?: boolean;
    validator?: string;
    isDate?: boolean;
    date?: Date;
    setDate?: (date: Date | undefined) => void;
}

export default function input({ fieldLegend, placeholder, isOptional, 
                                isNumber, validator, isDate,
                                date, setDate }: inputTypes) {

    return(
        <fieldset className="fieldset">
            {isNumber ? (
                <>
                    <legend className="fieldset-legend">{fieldLegend}</legend>
                    <input
                    type="number"
                    className="input validator w-[20em]"
                    required
                    placeholder="Enter a number"
                    />
                    <p className="validator-hint">{validator}</p>
                </>
                ) : isDate && setDate ? ( 

                    
                    <>
                        <legend className="fieldset-legend">{fieldLegend}</legend>
                        <button popoverTarget="rdp-popover" className="input input-border w-[20em]" style={{ anchorName: "--rdp" } as React.CSSProperties}>
                            {date ? date.toLocaleDateString() : "Pick a date"}
                        </button>
                        <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" } as React.CSSProperties}>
                            <DayPicker
                                className="react-day-picker"
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />                   
                        </div>
                        <p className="validator-hint">{validator}</p>
                    </>
                ) : ( 
                    <>
                        <legend className="fieldset-legend">{fieldLegend}</legend>
                        <input type="text" className="input w-[20em]" placeholder={placeholder} />
                        <p className="validator-hint">{validator}</p>
                    </>
                )
            }
            {
                isOptional &&
                <p className="label">Optional</p>
            } 

        </fieldset>

    );
}