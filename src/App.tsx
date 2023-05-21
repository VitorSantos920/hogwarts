import { Header } from './components/Header';
import { FiChevronsDown } from 'react-icons/fi';
import { Home } from './styles/components/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <Home className="home flex">
                    <h1 className="home__title">Hogwarts</h1>
                    <h2 className="home__subtitle">
                        “Draco Dormiens Nunquam Titillandus.”
                    </h2>

                    <a href="#">
                        <FiChevronsDown className="home__arrowDown" size={72} />
                    </a>
                </Home>
            </main>
        </div>
    );
}

export default App;
