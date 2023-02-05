import Link from "next/link";

function Navbar() {

    return (
        <nav className="invisible md:visible sticky h-12 top-0 flex border-t border-slate-900 border-opacity-40 bg-slate-800 bg-opacity-30">
            <div className="container flex justify-end items-center">
                <div className="space-x-10 text-sm">
                    <Link className="opacity-30 hover:opacity-100 duration-300" scroll={false} href='#welcome'>
                        <span>About Me</span>
                    </Link>
                    <Link className="opacity-30 hover:opacity-100 duration-300 " scroll={false} href="#work">
                        <span>Work</span>
                    </Link>
                    <Link className="opacity-30 hover:opacity-100 duration-300" scroll={false} href="#education">
                        <span>Education</span>
                    </Link>
                    <Link className="opacity-30 hover:opacity-100 duration-300" scroll={false} href="#skills">
                        <span>Skills</span>
                    </Link>
                    <Link className="opacity-30 hover:opacity-100 duration-300" scroll={false} href="#contact">
                        <span>Contact</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;