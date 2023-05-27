import { FiChevronsDown } from 'react-icons/fi';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Home } from './styles/Home';
import { History } from './styles/History';
import { Houses } from './styles/Houses';
import { Container } from './styles/Container';

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
                    <Container className="flex">
                        <h3 className="history__title">
                            Sua <br /> História
                        </h3>
                        <div className="divider"></div>
                        <div className="history__about">
                            <p className="history__description">
                                “Hogwarts foi fundada há mais de 1000 anos,
                                pelos quatro maiores bruxos e bruxas da época:{' '}
                                <span className="bold">
                                    Godric Grifinória, Helga Lufa-Lufa, Rowena
                                    Ravenclaw e Salazar Sonserina
                                </span>
                                . Três dos fundadores viviam em perfeita
                                harmonia, mas Salazar Sonserina queria ser mais
                                seletivo em relação aos alunos admitidos em
                                Hogwarts. Ele achava que o Ensino da Magia devia
                                ser somente para famílias inteiramente mágicas,
                                em outras palavras, sangues puros...”
                                <span className="bold">
                                    {' '}
                                    (MCGONAGALL, Minerva)
                                </span>
                                .
                            </p>
                            <Button house={'default'}>Leia Mais</Button>
                        </div>
                    </Container>
                </History>

                <Houses className="houses flex">
                    <Container className="flex">
                        <h3 className="houses__title">Casas</h3>
                        <p className="houses__description">
                            Cada fundador de Hogwarts criou uma Casa, onde
                            apenas admitiam alunos que tivessem as qualidades
                            pessoais que prezavam.
                            <br />
                            Funcionam como se fossem a família de cada estudante
                            e possuem pontos. Com os pontos, ocorre a
                            classificação das Casas ao decorrer do ano letivo.
                            Os acertos dos estudantes, sejam por respostas
                            corretas nas aulas, sejam por bons atos, lhe rendem
                            pontos. Seus erros em aulas ou transgressões às
                            regras lhe tiram pontos. Ao final do ano, a Casa com
                            mais pontos ganha a
                            <span className="bold"> Taça das Casas</span>.
                        </p>
                    </Container>
                </Houses>
            </main>
        </div>
    );
}

export default App;
