export const ProjectNav = ({ setPosition }) => {

    return <nav>
        <ul className="navContainer">
            <li className="navOnglet" onClick={() => setPosition('projects')}>Projects</li>
            <li className="navOnglet" onClick={() => setPosition('about')}>About</li>
        </ul>
    </nav>
}