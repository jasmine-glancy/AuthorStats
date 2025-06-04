type SelectTypes = {
    name?: string;
    options: string[];
    defaultValue?: string;
}

export default function select({ name, options, defaultValue }: SelectTypes) {
    return(
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
    );
}