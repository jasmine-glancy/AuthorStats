
type TrackerTypes = {
    totalTracker?: boolean;
};

export default function radialTracker({totalTracker}: TrackerTypes) {
    return (
        <div className="max-h-[10em] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] w-[21em] border-1 border-solid border-[var(--dark_purple)] p-5 rounded-[1em] grid inline-grid mt-[1em] ml-[2em]">
            {
                totalTracker ? (
                    <div className="flex items-center gap-[2em] ml-[1em]">
                        {/* TODO: Percentage changes depending on the user's progress made  */}
                        <div className="radial-progress text-[var(--amethyst)]" style={{ "--value": 100 } as React.CSSProperties}
                            aria-valuenow={100} role="progressbar"></div>
                        <div className="ml-[1em]">
                            <h2 className="text-[var(--tropical_indigo)]">1,500/1,500</h2>
                            <h3>words written today</h3>
                        </div>
                    </div>
            ) : (
                <div className="flex items-center gap-[4em] ml-[1em]">
                    {/* TODO: Percentage changes depending on the user's progress made  */}
                    <div className="radial-progress text-[var(--amethyst)]" style={{ "--value": 25 } as React.CSSProperties}
                        aria-valuenow={25} role="progressbar">25%</div>
                    <div className="ml-4">
                        <h2 className="text-[var(--tropical_indigo)]">xxx/10,000</h2>
                        <h3>Total Words</h3>
                    </div>
                </div>
            )}
        </div>
    );
}