
export default function radialTracker() {
    return (
        <div>
            <div className="radial-progress text-[var(--tropical_indigo)]" style={{ "--value": 70 } as React.CSSProperties}
                 aria-valuenow={70} role="progressbar">70%</div>
        </div>
    );
}