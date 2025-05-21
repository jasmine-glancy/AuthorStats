type SelectTypes = {
    name: string;
    options: string[];
}

export default function select({ name, options }: SelectTypes) {
    return(
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{name}</legend>
            <select defaultValue="Please make a selection" className="select">
                <option disabled={true}>Please make a selection</option>
                {
                    options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }
            </select>
        </fieldset>
    );
}