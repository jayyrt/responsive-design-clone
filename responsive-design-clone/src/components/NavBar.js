import './NavBar.css'

const NavBar = ({ links }) => {

    return(
        <div>
            <nav>
                <h1>Start Bootstrap</h1>
                <ul>
                    {links.map(link => <li>{link}</li>)}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;