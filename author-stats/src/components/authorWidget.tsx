import ProfilePicture from "@/components/profilePicture";

export default function authorWidget () {
    return(
        <div>
            <div className="card bg-[var(--linen)] w-[22em] h-[26.5em] shadow-lg">
                <figure className="px-10 pt-10">
                    <ProfilePicture />
                </figure>
                <div className="card-body">
                    <h2 className="items-center text-center">Typewriter Humblebrag</h2>
                    <div className="pl-5">
                        <div className="grid">
                            <div className="flex inline-flex pb-1">
                                Current Work In Progress:
                                {/* TODO: Project name takes the user to that page */}
                                <span className="text-[var(--amethyst)] pl-[0.4em] underline">Trial by Blood</span>
                            </div>
                        </div>
                        <div className="flex inline-flex pb-1">
                            A <span className="text-[var(--amethyst)] pl-[0.4em] pr-[0.4em]">world-builder</span> 
                            specializing in 
                            <span className="text-[var(--amethyst)] pl-[0.4em]">dark fantasy</span>
                        </div>
                        <div className="flex inline-flex">
                            Inspired by
                            <span className="text-[var(--amethyst)] pl-[0.4em] pr-[0.4em]">K.A. Applegate</span>
                        </div>
                    </div>
                    <p className="items-center text-center pt-2">Member since 2025</p>
                </div>
            </div>
        </div>
    );
}