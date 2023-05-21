import { Header } from './components/Header';
import { FiChevronsDown } from 'react-icons/fi';
import './styles/components/Home.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <section className="home flex">
                    <h1 className="title">Hogwarts</h1>
                    <h2>“Draco Dormiens Nunquam Titillandus.”</h2>

                    <a href="#">
                        <FiChevronsDown className="arrow-down" size={72} />
                    </a>
                </section>
            </main>
        </div>
    );
}

export default App;
