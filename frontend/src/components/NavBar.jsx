import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Sinixx</a>
            </div>
            <ul className="navbar-links">
                {localStorage.getItem('token') ? (
                    <>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </>
                ) : (
                    <li>
                        <a href="/login">Login</a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
