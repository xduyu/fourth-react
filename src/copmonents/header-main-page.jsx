import './css/header.css'

export default function HeaderMain() {
    return (
        <>

            <header className="header">
                <nav className="nav">
                    <img src="vite.svg" alt="" className="logo" />
                    <ul className="ul-list">
                        <li className="li-item">Главная</li>
                        <li className="li-item">О нас</li>
                        <li className="li-item">Поддержка</li>
                    </ul>
                </nav>
            </header>

        </>
    )
}