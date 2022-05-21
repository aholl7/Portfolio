import Link from 'next/link';
const NavBar = () => {
    return (
        <nav className="inline-flex flex-row text-white float-right mx-auto">
            <Link href="/">
                <a className="p-4 m-2 text-xl hover:text-red-500">Home</a>
            </Link>
            <Link href="/about-me">
                <a className="p-4 m-2 text-xl hover:text-red-500">About</a>
            </Link>
            <Link href="/skills">
                <a className="p-4 m-2 text-xl hover:text-red-500">Skills</a>
            </Link>
            <Link href="/portfolio">
                <a className="p-4 m-2 text-xl hover:text-red-500">Portfolio</a>
            </Link>
            <Link href="/blog">
                <a className="p-4 m-2 text-xl hover:text-red-500">Blog</a>
            </Link>
            <Link href="/contact">
                <a className="p-4 m-2 text-xl hover:text-red-500">Contact</a>
            </Link>
        </nav>
    );
}

export default NavBar;