
export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen bg-linear-to-b from-[var(--dark_purple)] to-[var(--tropical_indigo)] sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex justify-center bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] h-[30em] w-[75em] pt-10 text-[var(--dark_purple)] rounded-[2em]">
          <h1 className="font-bold underline decoration-solid">Welcome to Author Stats!</h1>
        </div>

      </main>
    </div>
  );
}
