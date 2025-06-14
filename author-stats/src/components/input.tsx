"use client";

import { DayPicker } from "react-day-picker";


type inputTypes = {
    fieldLegend?: string;
    placeholder?: string;
    isOptional?: boolean;
    isNumber?: boolean;
    isName?: boolean;
    validator?: React.ReactNode;
    isDate?: boolean;
    isTime?: boolean;
    date?: Date;
    isUsername?: boolean;
    isPassword?: boolean;
    setDate?: (date: Date | undefined) => void;
    pickerOpen?: boolean;
    setPickerOpen?: (open: boolean) => void;
    inputId: string;
}

export default function input({ fieldLegend, placeholder, isOptional, 
                                isNumber, isName, validator, 
                                isDate, isTime, date, isUsername,
                                isPassword, setDate, pickerOpen, 
                                setPickerOpen, inputId }: inputTypes) {
    return(
        <fieldset className="fieldset">
            {isNumber ? (
                <>
                    <legend className="fieldset-legend">{fieldLegend}</legend>
                    <input
                    type="number"
                    id={inputId}
                    className="input validator text-center w-[20em] h-[3em]"
                    min={1}
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
                        id={inputId}
                        className="input validator text-center w-[20em]"
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
                            className="input input-border text-center border-2 border-[var(--amethyst)] w-[20em] p-2" 
                            style={{ anchorName: "--rdp" } as React.CSSProperties}
                            onClick={() => setPickerOpen(!pickerOpen)}>
                            <span className="flex items-center text-center gap-2">
                                <img src="/calendar.svg" alt="calendar" className="w-[2em] inline justify-center" />
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
                ) : isUsername? (
                    <>
                    <label className="input validator">
                        <svg className="h-[1.5em] text-center opacity-50 text-[var(--tropical_indigo)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </g>
                        </svg>
                        <input
                            type="text" 
                            id={inputId}
                            required
                            placeholder={placeholder}
                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                            minLength={3}
                            maxLength={30}
                            className="text-center"
                            title="Only letters, numbers or dash"
                        />
                        </label>
                        <p className="validator-hint hidden">
                            {validator}
                        </p>
                    </>
                ) : isPassword ? (
                    <>
                        <label className="input validator">
                        <svg className="h-[1.5em] text-center opacity-50 text-[var(--tropical_indigo)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            type="password"
                            id={inputId}
                            required
                            placeholder={placeholder}
                            minLength={8}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            className="w-[18em] text-center"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                        </label>
                        <p className="validator-hint hidden">
                            {validator}
                        </p>
                    </>
                ) : isTime ? (
                    <>
                        <legend className="fieldset-legend">{fieldLegend}</legend>
                        <input type="time"  
                            id={inputId}
                            className="input input-border border-2 border-[var(--amethyst)] w-[20em] text-center pr-10" 
                        /> 
                        <p className="validator-hint">{validator}</p>
                    </>
                ) : ( 
                    <>
                        <legend className="fieldset-legend">{fieldLegend}</legend>
                        <input type="text" 
                            id={inputId}
                            className="input w-[20em] text-center pr-10" 
                            placeholder={placeholder} /> 
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