import './NavBar.css'

const NavBar = ({ links, toggleMenu, isMenuOpen }) => {
    const menuClass = isMenuOpen ? 'menu-open' : '';

    return(
        <div>
            <nav className="nav-bar">
                <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
                <ul>
                    {links.map(link => <li>{link}</li>)}
                </ul>
                <button className='menu-button' onClick={toggleMenu}>MENU</button>
            </nav>

            <menu className={menuClass}>
            <ul className={isMenuOpen ? 'menu-text' : 'hidden'}>{links.map(link => <li>{link}</li>)}</ul>
            </menu>
        </div>
    )
}

export default NavBar;