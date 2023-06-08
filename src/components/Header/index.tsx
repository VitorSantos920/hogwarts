import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import './style';
import { DivHeaderContainer, HeaderContainer, ListContainer } from './style';
export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <HeaderContainer className="header flex">
            <DivHeaderContainer className="header__container flex">
                <a href="#" className="header__logo">
                    HW
                </a>

                <nav className="header__menu">
                    <ListContainer
                        className={`header__menu-itens flex ${
                            isOpen && 'open'
                        }`}
                    >
                        <li className="header__item">
                            <a href="#home" onClick={() => setIsOpen(!isOpen)}>
                                Home
                            </a>
                        </li>
                        <li className="header__item">
                            <a
                                href="#history"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                História
                            </a>
                        </li>
                        <li className="header__item">
                            <a
                                href="#houses"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Casas
                            </a>
                        </li>
                        <li className="header__item">
                            <a
                                href="#dumbledore"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Dumbledore
                            </a>
                        </li>
                    </ListContainer>
                </nav>

                <nav
                    className={`header__menu--toggle ${isOpen && 'open'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FiMenu className="hidden-menu" size={52} />
                </nav>
            </DivHeaderContainer>
        </HeaderContainer>
    );
}
