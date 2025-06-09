
import Input from "./input";
import Select from "./select";
import LogMood from "./logMood";

type PopupProps = {
  reference: React.RefObject<HTMLDialogElement | null>;
};

export default function Popup({ reference }: PopupProps) {
    return(
        <div>
            <dialog ref={reference} className="modal">
                <div className="modal-box max-w-[40em]">
                    {/* TODO: If user was researching, ask for time instead of words */}
                    <h3 className="font-bold text-lg text-center text-[var(--tropical_indigo)]">Add Session</h3>
                    <h4 className="text-center pb-2">How did you feel while creating?</h4>
                    <LogMood />
                    <div className="flex justify-center">
                        <Select
                            name="What did you work on?"
                            options={["Writing", "World-Building", "Character Development", "Research"]}
                            defaultValue="Please make a selection"
                        />
                    </div>
                    <div className="grid grid-cols-2">
                        <Select
                            isFillable={true}
                            fieldLegend="Where were you working?"
                            options={["Library", "Office", "Home", "School", "Cafe"]}
                        />
                        <Select
                            isFillable={true}
                            fieldLegend="How were you working?"
                            options={["Laptop Computer", "Phone", "Pencil and Paper", "Desktop Computer"]}
                        />
                        <Input
                            isNumber={true}
                            placeholder="Word Count"
                        />
                        <Select
                            options={["words this session", "total words"]}
                            defaultValue="words this session"
                        />
                        <Input
                            isTime={true}
                            fieldLegend="When did you start?"
                        />
                        <Input
                            isTime={true}
                            fieldLegend="When did you end?"
                        />
                    </div>
                    <div className="flex justify-center">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}