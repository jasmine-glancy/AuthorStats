
import Link from "next/link";

export default function footer () {
    return(
        <footer className="footer sm:footer-horizontal bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] rounded-[2em] text-[var(--dark_purple)] mt-5 p-10">
            <aside>
                <img src="/books.svg" alt="Books" className="w-[8em]"/>
            </aside>
            <nav>
                <h6 className="footer-title">Profile</h6>
                {/* TODO: change to view profile and log out when the user is logged in */}
                <Link href="/login" className="link link-hover">Log In</Link>
                <Link href="/register" className="link link-hover">Register</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Projects</h6>
                <Link href="/add-project" className="link link-hover">Add a New Project</Link>
                <Link href="/edit-project" className="link link-hover">Edit Existing Project</Link>
                <Link href="/view-projects" className="link link-hover">View Projects</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link href="" className="link link-hover">About Us</Link>
                <Link href="" className="link link-hover">Contact Us</Link>
            </nav>

        </footer>
    );
}