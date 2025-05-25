
import Link from "next/link";

export default function Header() {
    return(
        <div className="navbar inline-flex relative pl-[60%] mb-5">
            <div className="grid justify-center items-center">
                <h1 className="pt-5 pr-10 font-bold underline decoration-solid">Author Stats</h1>   
                
                {/* TODO: If the user is not logged in, show these options: */}
                {/* <div className="grid justify-center inline-flex">
                    <Link href="/log-in" className="hover:animate-wiggle text-[var(--tropical_indigo)] hover:text-[var(--amethyst)]">
                        <h2>Login</h2>
                    </Link>
                    <span className="pl-[5%] pr-[5%] pt-[1%]">|</span>
                    <Link href="/register" className="hover:animate-wiggle pr-10 text-[var(--tropical_indigo)] hover:text-[var(--amethyst)]">
                        <h2>Register</h2>
                    </Link>
                </div> */}

                {/* TODO: If the user is logged in, show Log Out */}
                <div className="flex gap-2 justify-end ">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mt-5 mr-10">
                            <div className="w-10 rounded-full">
                                <img className="w-10 rounded-full"
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[var(--dove_gray)] rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link href="" className="justify-between active:bg-[var(--tropical_indigo)] focus:bg-[var(--tropical_indigo)]">Profile</Link>
                            </li>
                            <li className="active:bg-[var(--tropical_indigo)] focus:bg-[var(--tropical_indigo)]"><Link href="" className="justify-between active:bg-[var(--tropical_indigo)] focus:bg-[var(--tropical_indigo)]">Settings</Link></li>
                            <li className="active:bg-[var(--tropical_indigo)] focus:bg-[var(--tropical_indigo)]"><Link href="" className="justify-between active:bg-[var(--tropical_indigo)] focus:bg-[var(--tropical_indigo)]">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Link href="/">
                <img src="/icon.svg" alt="Books" className="w-[8em] hover:animate-wiggle"/>
            </Link>
        </div>
    );
}

