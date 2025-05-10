export default function dayStreak() {
    return (
        <div className="h-[10em] mt-4 bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] w-[15em] border-1 border-solid border-[var(--dark_purple)] p-5 rounded-[1em] grid gap-[1em]">
            <div className="flex items-center justify-center">
                <h1 className="text-[var(--amethyst)] pr-[2%] font-bold text-6xl">3</h1>
                <h3>days in a row</h3>
            </div>
        </div>
    );
}