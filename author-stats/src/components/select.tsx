

import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';


type SelectTypes = {
    name?: string;
    options: string[];
    isFillable?: boolean;
    defaultValue?: string;
    fieldLegend?: string;
    validator?: React.ReactNode;
    dynamicSelect?: boolean | true;
    onChange?: (selected: { value: string; label: string } | null) => void;
}

export default function select({ name, options, defaultValue, onChange,
                                 isFillable, fieldLegend, validator, dynamicSelect }: SelectTypes) {
    const optionObjects = options.map(option => ({ value: option, label: option }));
    const selectedOption = optionObjects.find(opt => opt.value === defaultValue);

    return(
        <>
        {isFillable ? (
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">{fieldLegend}</legend>

                        <CreatableSelect 
                            className="w-[23.25em] input-border text-[var(--dark_purple)] text-center rounded-sm border-2 border-[var(--amethyst)] bg-[length:2em_2em] bg-no-repeat bg-right"
                            options={options.map(option => ({ value: option, label: option }))}
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
                ) : dynamicSelect ? (
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">{name}</legend>
                        <Select 
                            className="w-[23em] input-border text-[var(--dark_purple)] text-center rounded-sm border-2 border-[var(--amethyst)] bg-[length:2em_2em] bg-no-repeat bg-right"
                            options={optionObjects}
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
                            options={optionObjects}
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