type inputTypes = {
    fieldLegend: string;
    placeholder: string;
    isOptional?: boolean;
    isNumber?: boolean;
    validator?: string;
}

export default function input({ fieldLegend, placeholder, isOptional, isNumber, validator }: inputTypes) {
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