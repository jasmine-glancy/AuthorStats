type inputTypes = {
    fieldLegend: string;
    placeholder: string;
    isOptional?: boolean;
}

export default function input({ fieldLegend, placeholder, isOptional }: inputTypes) {
    return(
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{fieldLegend}</legend>
            <input type="text" className="input" placeholder={placeholder} />
            {isOptional &&
                <p className="label">Optional</p>
            }
        </fieldset>
    );
}