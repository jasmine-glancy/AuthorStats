
export default function footer () {
    return(
        <footer className="footer sm:footer-horizontal bg-[var(--dove_gray)] border-5 border-double border-[var(--tropical_indigo)] rounded-[2em] text-[var(--dark_purple)] mt-5 p-10">
            <aside>
                <img src="/books.svg" alt="Books" className="w-[8em]"/>
            </aside>
            <nav>
                <h6 className="footer-title">Profile</h6>
                {/* TODO: change to view profile and log out when the user is logged in */}
                <a className="link link-hover">Log In</a>
                <a className="link link-hover">Register</a>
            </nav>
            <nav>
                <h6 className="footer-title">Projects</h6>
                <a className="link link-hover">Add a New Project</a>
                <a className="link link-hover">Edit Existing Project</a>
                <a className="link link-hover">View Projects</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Contact Us</a>
            </nav>

        </footer>
    );
}