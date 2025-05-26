
export default function projectHeader() {
    return(
         <div
            className="hero min-h-[15em] w-full"
            style={{
                backgroundImage:
                "url(https://png.pngtree.com/thumb_back/fh260/background/20240611/pngtree-epic-wallpaper-of-a-fire-dragon-image_15861302.jpg)",
            }}
            >
            <div className="hero-overlay"></div>
            <div className="text-center w-full grid grid-col">
                <div className="w-full bg-[var(--dove_gray)] border-t-4 border-t-double border-t-[var(--tropical_indigo)] border-b-4 border-b-double border-b-[var(--tropical_indigo)]">
                    <h1 className="mb-5 mt-5 text-5xl font-bold">Project Name</h1>
                </div>
                <div className="hero-content grid grid-cols-2 gap-x-[2em] mt-5">
                    <button className="btn btn-active h-[4em] disabled">Primary Genre Here</button>
                    <button className="btn btn-active h-[4em] disabled">Secondary Genre</button>
                </div>
            </div>
        </div>
    );
}