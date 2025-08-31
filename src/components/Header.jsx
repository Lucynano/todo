function Header() {
    return (
        <header className="header">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* carré avec coche */}
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12.1V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11.9" />
            </svg>
            <h1>TODO</h1>
        </header>
    );
}

export default Header;
