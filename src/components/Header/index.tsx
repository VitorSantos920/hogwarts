import '../../styles/components/Header.scss';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header flex">
            <div className="header__container flex">
                <a href="#" className="header__logo">
                    HW
                </a>

                <nav className="header__menu">
                    <ul
                        className={`header__menu-itens flex ${
                            isOpen && 'open'
                        }`}
                    >
                        <li className="header__item">
                            <a href="https://youtube.com">Home</a>
                        </li>
                        <li className="header__item">
                            <a href="#">História</a>
                        </li>
                        <li className="header__item">
                            <a href="#">Casas</a>
                        </li>
                        <li className="header__item">
                            <a href="#">Dumbledore</a>
                        </li>
                    </ul>
                </nav>

                <nav
                    className={`header__menu--toggle ${isOpen && 'open'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FiMenu className="hidden-menu" size={52} />
                </nav>
            </div>
        </header>
    );
}
