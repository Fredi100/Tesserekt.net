import Link from 'next/link';
import Button from '@material-ui/core/Button';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <header>
        {/* TODO Make this a navbar */}
        <Link href="/">
            <Button variant="contained" color="primary">
                Home
            </Button>
        </Link>
        <Link href="/blog">
            <Button variant="contained" color="primary">
                Blog
            </Button>
        </Link>
        <Link href="/about">
            <Button variant="contained" color="primary">
                About
            </Button>
        </Link>
    </header>
);

export default Header;