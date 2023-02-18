import Link from "next/link";

function Navbar() {

    return (
        <nav className="hidden md:flex sticky h-12 top-0  border-t border-slate-900 border-opacity-40 bg-slate-800 bg-opacity-95">
            <div className="container mx-auto flex justify-start items-center">
                <div className="space-x-10">
                    <Link className="hidden lg:inline opacity-30 hover:opacity-100 duration-150" scroll={false} href='#welcome'>
                        <span>About Me</span>
                    </Link>
                    <Link className="inline lg:hidden opacity-30 hover:opacity-100 duration-150" scroll={false} href='#aboutme'>
                        <span>About Me</span>
                    </Link>
                    <Link className="opacity-30 hover:opacity-100 duration-150 " scroll={false} href="#work">
                        <span>Work</span>
                    </Link>
                    <Link className="opacity-30 hover:opacity-100 duration-150" scroll={false} href="#skills">
                        <span>Skills</span>
                    </Link>
                    <Link className="opacity-30 hover:opacity-100 duration-150" scroll={false} href="#education">
                        <span>Education</span>
                    </Link>
                    <Link className="opacity-30 hover:opacity-100 duration-150" scroll={false} href="#contact">
                        <span>Contact</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;