
export default function select() {
    return(
        <fieldset className="fieldset">
            <legend className="fieldset-legend">What genre is your project?</legend>
            <select defaultValue="Please make a selection" className="select">
                <option disabled={true}>Please make a selection</option>
                <option>Action/Adventure</option>
                <option>Children's Fiction</option>
                <option>Classic Fiction</option>
                <option>Contemporary Fiction</option>
                <option>Fantasy</option>
                <option>Dark Fantasy</option>
                <option>Fairy Tales</option>
                <option>Folktales</option>
                <option>Heroic Fantasy</option>
                <option>High Fantasy</option>
                <option>Historical Fantasy</option>
                <option>Low Fantasy</option>
                <option>Magical Realism</option>
                <option>Mythic Fantasy</option>
                <option>Urban Fantasy</option>
            </select>
        </fieldset>
    );
}