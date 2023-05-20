import '../../styles/components/Header.scss';
import { FiMenu } from 'react-icons/fi';

export function Header() {
    return (
        <header className="header flex">
            <div className="container flex">
                <a href="#" className="logo">
                    HW
                </a>
                <nav className="menu">
                    <ul className="menu-itens flex">
                        <li className="item">
                            <a href="#">Home</a>
                        </li>
                        <li className="item">
                            <a href="#">História</a>
                        </li>
                        <li className="item">
                            <a href="#">Casas</a>
                        </li>
                        <li className="item">
                            <a href="#">Dumbledore</a>
                        </li>
                    </ul>

                    <FiMenu className="hidden-menu" size={52} />
                </nav>
            </div>
        </header>
    );
}
