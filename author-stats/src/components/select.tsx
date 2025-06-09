

import CreatableSelect from 'react-select/creatable';

type SelectTypes = {
    name?: string;
    options: string[];
    defaultValue?: string;
    isFillable?: boolean;
    fieldLegend?: string;
    validator?: React.ReactNode;
}

export default function select({ name, options, defaultValue, 
                                 isFillable, fieldLegend, validator }: SelectTypes) {
    
    return(
        <>
        {isFillable ? (
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">{fieldLegend}</legend>

                        <CreatableSelect 
                            className="w-[23em] input-border text-[var(--dark_purple)] text-center rounded-sm border-2 border-[var(--amethyst)] bg-[length:2em_2em] bg-no-repeat bg-right"
                            options={options.map(option => ({ value: option, label: option }))}
                            theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                primary25: "var(--tropical_indigo)",
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
                        <select defaultValue={defaultValue} className="select border-2 max-w-[20em] border-[var(--amethyst)] text-center bg-[url('/arrow-down.svg')] bg-no-repeat bg-right bg-[length:2em_2em] pr-10">
                            <option disabled={true}>Please make a selection</option>
                            {
                                options.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))
                            } 
                        </select>
                    </fieldset>
                )
        }
        </>
    );
}