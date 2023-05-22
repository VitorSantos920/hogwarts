import { Header } from './components/Header';
import { FiChevronsDown } from 'react-icons/fi';
import { Home } from './styles/Home';
import { ContainerHistory, History } from './styles/History';
import { Button } from './components/Button';

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

                    <a href="#history">
                        <FiChevronsDown className="home__arrowDown" size={72} />
                    </a>
                </Home>

                <History className="history flex" id="history">
                    <ContainerHistory className="history__container flex">
                        <h3 className="history__title">
                            Sua <br /> História
                        </h3>
                        <div className="divider"></div>
                        <div className="history__about">
                            <p className="history__description">
                                “Hogwarts foi fundada há mais de 1000 anos,
                                pelos quatro maiores bruxos e bruxas da época:
                                Godric Grifinória, Helga Lufa-Lufa, Rowena
                                Ravenclaw e Salazar Sonserina. Três dos
                                fundadores viviam em perfeita harmonia, mas
                                Salazar Sonserina queria ser mais seletivo em
                                relação aos alunos admitidos em Hogwarts. Ele
                                achava que o Ensino da Magia devia ser somente
                                para famílias inteiramente mágicas, em outras
                                palavras, sangues puros...” (MCGONAGALL,
                                Minerva).
                            </p>
                            <Button house={'default'}>Leia Mais</Button>
                        </div>
                    </ContainerHistory>
                </History>
            </main>
        </div>
    );
}

export default App;
