import './style.css'

export default function Header(props) {

    const { setCurrentPage } = props

    // Combien d'éléments je peux retourner ? 1 element maximum
    // Sinon, englober les éléments d'un fragment react <> ou <div>
    return (
        <header>
            <nav>
                <ul>
                    <li><a onClick={() => { setCurrentPage('home') }} href="#">Accueil</a></li>
                    <li><a onClick={() => { setCurrentPage('detailProject') }} href="#projects">Projets</a></li>
                    <li><a onClick={() => { setCurrentPage('contact') }} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

