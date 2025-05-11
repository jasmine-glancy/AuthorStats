type averageTypes = {
    averageMood?: boolean;
    averageSessionWriteTime?: boolean;
    averageWordCountPerDay?: boolean;
    writingOrWorldBuilding?: boolean;
    averageWritingPlace?: boolean;
    mostContributedTo?: boolean;
    mostWritten?: boolean;
};

export default function averageWidget({averageMood, averageSessionWriteTime,
                                       averageWordCountPerDay, writingOrWorldBuilding,
                                       averageWritingPlace, mostContributedTo,
                                       mostWritten}: averageTypes) {
    return (
        <div>
            {/* TODO: Display average mood */}
            {
                averageMood ? (
                    <div className="rounded-[1em] h-[14.5em] flex justify-center items-center border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 w-[15em]">
                        <div className="grid place-items-center text-center">
                            <img
                                src="/5.svg"
                                alt="Mood"
                                className="w-[5em] border-1 p-1 border-[var(--tropical_indigo)] rounded-[50%]"/>
                            <h3 className="pt-5">You felt</h3>
                            <h2 className="font-bold text-[var(--amethyst)]">xxx</h2>
                            <h3>Working on this goal!</h3>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
            {/* TODO: Calculate average writing time of day */}
            {/* TODO: Display average word count per session */}
            {
                averageSessionWriteTime ? (
                    <div className="rounded-[1em] flex justify-center items-center border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 w-[15em]">
                        <div className="grid place-items-center text-center">
                            <img
                                src="/writing-hand-default.svg"
                                alt="Hand with a pen"
                                className="w-[5em] border-1 border-[var(--tropical_indigo)] p-2 rounded-[50%]"/>
                            <h3 className="pt-5">You wrote</h3>
                            <h2 className="font-bold text-[var(--amethyst)]">xxx</h2>
                            <h3>words per session on average!</h3>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
            {/* TODO: Display average word count per day */}
            {
                averageWordCountPerDay ? (
                    <div className="rounded-[1em] flex justify-center items-center border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 w-[15em]">
                        <div className="grid place-items-center text-center">
                            <img
                                src="/daily-count.svg"
                                alt="Daily Word Count Average"
                                className="w-[5em] border-1 border-[var(--tropical_indigo)] rounded-[50%]"
                            />
                            <h3 className="pt-5">Your daily word count average is</h3>
                            <h2 className="font-bold text-[var(--amethyst)]">xxx</h2>
                            <h3>words!</h3>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
            {/* TODO: Inform the user whether they spend more time writing or worldbuilding */}
            {
                writingOrWorldBuilding ? (
                    <div className="rounded-[1em] flex justify-center items-center border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 w-[15em] h-[14.5em]">
                        <div className="grid place-items-center text-center">
                            <img
                                src="/world-builder.svg"
                                alt="Illustration of purple mountains under a cloudy sky with a large sun."
                                className="w-[5em] border-1 border-[var(--tropical_indigo)] rounded-[50%]"
                            />
                            <h3 className="pt-5">You spent more time</h3>
                            <h2 className="font-bold text-[var(--amethyst)]">xxx!</h2>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
            {/* TODO: Show where the user has written the most often */}
            {
                averageWritingPlace ? (
                    <div className="rounded-[1em] flex justify-center items-center border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 w-[15em] h-[14.5em]">
                        <div className="grid place-items-center text-center">
                            <img
                                src="/cafe.svg"
                                alt="Preferred Location"
                                className="w-[5em] border-1 p-1 border-[var(--tropical_indigo)] rounded-[50%]"
                            />
                            <h3 className="pt-5">You spent more time writing</h3>
                            <h2 className="font-bold text-[var(--amethyst)]">xxx!</h2>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
            {/* TODO: Show which project the user has contributed the most entries to */}
            {
                mostContributedTo ? (
                    <div className="rounded-[1em] flex justify-center items-center border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 w-[15em] h-[14.5em]">
                        <div className="grid place-items-center text-center">
                            <img
                                src="/book-shelf.svg"
                                alt="Illustration of five books in various shades of purple and beige standing upright on a dark shelf, with one book leaning to the right."
                                className="w-[5em] border-1 border-[var(--tropical_indigo)] rounded-[50%]"
                            />
                            <h3 className="pt-5">You contributed most to</h3>
                            <h2 className="font-bold text-[var(--amethyst)]">xxx!</h2>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
            {/* TODO: Show which genre the user has written the most of */}
            {
                mostWritten ? (
                    <div className="rounded-[1em] flex justify-center items-center border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] p-4 w-[15em] h-[14.5em]">
                        <div className="grid place-items-center text-center">
                            <img
                                src="/fantasy.svg"
                                alt="Illustration of purple mountains under a cloudy sky with a large sun."
                                className="w-[5em] border-1 border-[var(--tropical_indigo)] rounded-[50%]"
                            />
                            <h3 className="pt-5">On average, you write mostly</h3>
                            <h2 className="font-bold text-[var(--amethyst)]">genre!</h2>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    );
}