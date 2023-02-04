import Link from "next/link";

function Navbar() {

    return (
        <nav className="hidden md:visible">
            <div className="static md:sticky top-0 h-12 flex bg-slate-800 border-t border-slate-900 border-opacity-40 bg-opacity-25 items-center justify-end space-x-10 px-12 text-lg">
                <Link className="opacity-80 hover:opacity-100" href='#welcome'>
                    <span>About Me</span>
                </Link>
                <Link className="opacity-80 hover:opacity-100 " href="#welcome">
                    <span>Work</span>
                </Link>
                <Link className="opacity-80 hover:opacity-100" href="#education">
                    <span>Education</span>
                </Link>
                <Link className="opacity-80 hover:opacity-100" href="#skills">
                    <span>Skills</span>
                </Link>
                <Link className="opacity-80 hover:opacity-100" href="#contact">
                    <span>Contact</span>
                </Link>
                <Link className="opacity-80 hover:opacity-100" href="https://github.com/micro927" target={"_blank"}>
                    <span>Github</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;