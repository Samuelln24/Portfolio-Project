import './style.css'

export default function Header() {
    // Combien d'éléments je peux retourner ? 1 element maximum
    // Sinon, englober les éléments d'un fragment react <> ou <div>
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}