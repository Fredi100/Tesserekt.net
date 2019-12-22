import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <header>
        {/* TODO Make this a navbar */}
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/blog">
            <a style={linkStyle}>Blog</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </header>
);

export default Header;