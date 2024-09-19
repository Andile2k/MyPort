import { useState, useEffect } from "react";
// Remove Link if not used
// import { Link } from "react-scrpll";

function NavBar () {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();  // invoke the function
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="src/assets/Black White Minimalist SImple Monogram Typography Logo.png" alt="MyLogo" />
            </div>
        </nav>
    );
}

export default NavBar;
