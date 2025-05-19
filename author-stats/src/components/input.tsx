
import { DayPicker } from "react-day-picker";

type inputTypes = {
    fieldLegend: string;
    placeholder?: string;
    isOptional?: boolean;
    isNumber?: boolean;
    isName?: boolean;
    validator?: string;
    isDate?: boolean;
    date?: Date;
    setDate?: (date: Date | undefined) => void;
    pickerOpen?: boolean;
    setPickerOpen?: (open: boolean) => void;
}

export default function input({ fieldLegend, placeholder, isOptional, 
                                isNumber, isName, validator, 
                                isDate, date, setDate, 
                                pickerOpen, setPickerOpen }: inputTypes) {
    return(
        <fieldset className="fieldset">
            {isNumber ? (
                <>
                    <legend className="fieldset-legend">{fieldLegend}</legend>
                    <input
                    type="number"
                    className="input validator w-[20em]"
                    required
                    placeholder={placeholder}
                    />
                    <p className="validator-hint">{validator}</p>
                </>
                ) : isName ? (
                    <>
                        <legend className="fieldset-legend">{fieldLegend}</legend>
                        <input
                        type="text"
                        className="input validator w-[20em]"
                        required
                        placeholder={placeholder}
                        />
                        <p className="text-lg text-center text-[var(--tropical_indigo)]">(You can change this later!)</p>
                        <p className="validator-hint">{validator}</p>
                    </>
                ) : isDate && setDate && setPickerOpen ? ( 

                    
                    <>
                        <legend className="fieldset-legend">{fieldLegend}</legend>
                        <button 
                            popoverTarget="rdp-popover" 
                            className="input input-border w-[20em] p-2" 
                            style={{ anchorName: "--rdp" } as React.CSSProperties}
                            onClick={() => setPickerOpen(!pickerOpen)}>
                            <span className="flex items-center gap-2">
                                <img src="/calendar.svg" alt="calendar" className="w-[2em] inline" />
                                {date ? date.toLocaleDateString() : "Pick a Date"}
                            </span>
                        </button>
                        {pickerOpen && (
                            <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" } as React.CSSProperties}>
                                <DayPicker
                                    className="react-day-picker"
                                    mode="single"
                                    selected={date}
                                    onSelect={(selected) => {
                                        setDate(selected);
                                        setPickerOpen(false);
                                    }}
                                />                   
                            </div>
                        )}
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