
export default function radialTracker() {
    return (
        <div className="bg-[var(--linen)] w-[20em] border-2 border-solid border-[var(--tropical_indigo)] p-5 rounded-lg grid gap-[1em] inline-flex">
            {/* TODO: Percentage changes depending on the user's progress made */}

            <div className="radial-progress text-[var(--amethyst)]" style={{ "--value": 70 } as React.CSSProperties}
                 aria-valuenow={70} role="progressbar">70%</div>
            <div className="grid items-center relative left-[2em]">
                <h2 className="text-[var(--tropical_indigo)]">xxx/10,000</h2>
                <h3 className="">Total Words</h3>
            </div>
        </div>
    );
}