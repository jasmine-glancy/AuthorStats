

import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";

type OptionType = { value: string; label: string; isDisabled?: boolean };

type SelectTypes = {
    name?: string;
    options: OptionType[];
    isFillable?: boolean;
    defaultValue?: string;
    fieldLegend?: string;
    validator?: React.ReactNode;
    dynamicSelect?: boolean | true;
    onChange?: (selected: { value: string; label: string } | null) => void;
    selectId: string;
}


export default function select({ name, options, defaultValue, onChange,
                                 isFillable, fieldLegend, validator, dynamicSelect, selectId }: SelectTypes) {
    const selectedOption = options.find(opt => opt.value === defaultValue);
    const [mounted, setMounted] = useState(false);

    // Renders the component only after it is mounted in the browser
    useEffect(() => setMounted(true), []);
    if (!mounted) return <Loading />;

    return(
        <>
        {isFillable ? (
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">{fieldLegend}</legend>

                        <CreatableSelect 
                            id={selectId}
                            options={options}
                            className="w-[23.25em] input-border text-[var(--dark_purple)] text-center rounded-sm border-2 border-[var(--amethyst)] bg-[length:2em_2em] bg-no-repeat bg-right"
                            theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                primary25: "var(--dove_gray)",
                                primary: "var(--amethyst)",
                            },
                            })}
                            styles={{
                                option: (baseStyles, state) => ({
                                ...baseStyles,
                                fontWeight: state.isSelected ? "bold" : "normal",    
                                }),
                                input: (baseStyles) => ({
                                ...baseStyles,
                                marginLeft: "auto",
                                marginRight: "auto",
                                })
                            }} />        
                        <p className="validator-hint">{validator}</p>
                    </fieldset>
                ) : dynamicSelect ? (
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">{name}</legend>
                        <Select 
                            className="w-[23em] input-border text-[var(--dark_purple)] text-center rounded-sm border-2 border-[var(--amethyst)] bg-[length:2em_2em] bg-no-repeat bg-right"
                            id={selectId}
                            options={options}
                            defaultValue={selectedOption}
                            onChange={onChange}
                            theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                primary25: "var(--dove_gray)",
                                primary: "var(--amethyst)",
                            },
                            })}
                            styles={{
                                option: (baseStyles, state) => ({
                                ...baseStyles,
                                fontWeight: state.isSelected ? "bold" : "normal",    
                                }),
                                input: (baseStyles) => ({
                                ...baseStyles,
                                marginLeft: "auto",
                                marginRight: "auto",
                                })
                            }}  />        
                        <p className="validator-hint">{validator}</p>
                    </fieldset>
                ) : (
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">{name}</legend>
                        <Select 
                            className="w-[23em] input-border text-[var(--dark_purple)] text-center rounded-sm border-2 border-[var(--amethyst)] bg-[length:2em_2em] bg-no-repeat bg-right"
                            options={options}
                            id={selectId}
                            defaultValue={selectedOption}
                            theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                primary25: "var(--dove_gray)",
                                primary: "var(--amethyst)",
                            },
                            })}
                            styles={{
                                option: (baseStyles, state) => ({
                                ...baseStyles,
                                fontWeight: state.isSelected ? "bold" : "normal",    
                                }),
                                input: (baseStyles) => ({
                                ...baseStyles,
                                marginLeft: "auto",
                                marginRight: "auto",
                                })
                            }}  />        
                        <p className="validator-hint">{validator}</p>
                    </fieldset>
                )
        }
        </>
    );
}