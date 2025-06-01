import ProfilePicture from "@/components/profilePicture";

export default function authorWidget () {
    return(
        <div>
            <div className="card bg-[var(--linen)] w-[22em] shadow-sm">
                <figure className="px-10 pt-10">
                    <ProfilePicture />
                </figure>
                <div className="card-body">
                    <h2 className="items-center text-center">Typewriter Humblebrag</h2>
                    <div className="pl-5">
                        <div className="flex inline-flex">
                            <span className="text-[var(--amethyst)] pr-[0.4em]">2</span> projects
                        </div>
                        <div className="flex inline-flex">
                            A <span className="text-[var(--amethyst)] pl-[0.4em] pr-[0.4em]">world-builder</span> 
                            specializing in 
                            <span className="text-[var(--amethyst)] pl-[0.4em] pr-[0.4em]">dark fantasy</span>
                        </div>
                        <p>Member since 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
}