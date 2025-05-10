
import Link from "next/link";

export default function Header() {
    return(
        <div className="inline-flex relative pl-[60%] mb-5">
            <div className="grid justify-center items-center">
                <h1 className="pt-5 pr-10 text-3xl font-bold underline decoration-solid">Author Stats</h1>   
                <div className="grid justify-center inline-flex">
                    <Link href="" className="text-[var(--tropical_indigo)] hover:text-[var(--amethyst)]">
                        <h2>Login</h2>
                    </Link>
                    <span className="pl-[5%] pr-[5%]">|</span>
                    <Link href="" className="text-[var(--tropical_indigo)] hover:text-[var(--amethyst)]">
                        <h2>Register</h2>
                    </Link>
                </div>
            </div>
            <img src="/icon.svg" alt="Books" className="w-[8em]"/>
        </div>
    );
}

