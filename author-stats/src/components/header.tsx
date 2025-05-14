
import Link from "next/link";

export default function Header() {
    return(
        <div className="inline-flex relative pl-[60%] mb-5">
            <div className="grid justify-center items-center">
                <h1 className="pt-5 pr-10 font-bold underline decoration-solid">Author Stats</h1>   
                <div className="grid justify-center inline-flex">
                    <Link href="" className="text-[var(--tropical_indigo)] hover:text-[var(--amethyst)]">
                        <h2>Login</h2>
                    </Link>
                    <span className="pl-[5%] pr-[5%] pt-[1%]">|</span>
                    <Link href="" className="pr-10 text-[var(--tropical_indigo)] hover:text-[var(--amethyst)]">
                        <h2>Register</h2>
                    </Link>
                </div>

                {/* TODO: If the user is logged in, show these options */}
                <div className="flex inline-flex justify-center pr-10">                    
                    Welcome,<p className="text-[var(--amethyst)] pl-1"> admin</p>!
                </div>
            </div>
            <img src="/icon.svg" alt="Books" className="w-[8em]"/>
        </div>
    );
}

