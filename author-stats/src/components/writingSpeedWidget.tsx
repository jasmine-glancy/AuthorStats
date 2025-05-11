
export default function writingSpeedWidget() {
    return (
        <div>
            {/* TODO: Calculate writing speed in words per minute */}
            <div className="rounded-[1em] flex border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 w-[15em] h-[14.5em]">
                  <div className="grid place-items-center text-center">
                    <img
                    src="/write-speed.svg"
                    alt="Writing Speed"
                    className="w-[5em] border-1 border-[var(--tropical_indigo)] p-2 rounded-[50%]"
                    />
                    <div className="flex flex-col items-center">
                        <h3>Your average writing speed is</h3>
                        <h2 className="font-bold text-[var(--amethyst)]">xxx</h2>
                        <h3>words per minute!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}