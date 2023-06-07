import { FiChevronsDown } from 'react-icons/fi';

import { Header } from './components/Header';
import { Button } from './components/Button';
import { House } from './components/House';

import { Home } from './styles/Home';
import { History } from './styles/History';
import { Houses } from './styles/Houses';
import { Container } from './styles/Container';
import { MainHall } from './styles/MainHall';

import MainHallImg from './img/mainHall.png';
import { Dumbledore, InitialContent } from './styles/Dumbledore';

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
                            <Button>Leia Mais</Button>
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
                        <House
                            houseTitle="Grifinória"
                            housePhrase='"Enquanto os mais corajosos e ousados foram para o destemido Grifinória."'
                            houseAbout="Sendo uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts, a Grifinória foi fundada por Godrico Gryffindor. Suas cores são o Escarlarte e o Ouro, possui como animal emblemático o Leão e corresponde ao elemento Fogo.
                            O Fantasma Patrono da Grifinória é Sir Nicholas de Mimsy-Porpington, mais conhecido como “Nick Quase-Sem-Cabeça."
                            baseURLPath="./src/img/gryffindor"
                            imgCharacteristics={[
                                {
                                    name: 'courage',
                                    alt: 'Símbolo de coragem representado por um punho.',
                                    figcaption: 'Coragem',
                                },
                                {
                                    name: 'determination',
                                    alt: 'Símbolo de determinação representado por uma fênix.',
                                    figcaption: 'Determinação',
                                },
                            ]}
                            imgHouse={{
                                name: 'gryffindor',
                                alt: 'Brasão da Grifinória e o personagem Harry Potter acima dele.',
                            }}
                        />
                        <House
                            houseTitle="Sonserina"
                            housePhrase='"Sonserina, aceitou apenas os bruxos de sangue puro e grande astúcia, que a ele pudessem vir a igualar."'
                            houseAbout="A Sonserina possui como fundador o Salazar Slytherin.
                            Os membros desta casa possuem a característica em comum de formar grupos, e em muitos deles, originam-se líderes, exemplificando as qualidades do fundador.
                            Apesar de qualquer status sanguíneo ser aceito em Sonserina, seu fundador prezava e valorizava os estudantes de Sangue Puro.
                            O animal emblemático desta casa é uma Serpente e suas cores são Verde e Prata e corresponde ao elemento Água.
                            O Fantasma Patrono da Sonserina é o Barão Sangrento."
                            baseURLPath="./src/img/slytherin"
                            imgCharacteristics={[
                                {
                                    name: 'leadership',
                                    alt: 'Símbolo de liderança representado por uma coroa.',
                                    figcaption: 'Coragem',
                                },
                                {
                                    name: 'ambition',
                                    alt: 'Símbolo de ambição representado por um alvo.',
                                    figcaption: 'Ambição',
                                },
                            ]}
                            imgHouse={{
                                name: 'slytherin',
                                alt: 'Brasão da Sonserina e o personagem Draco Malfoy acima dele.',
                            }}
                        />
                        <House
                            houseTitle="Corvinal"
                            housePhrase='"O espírito sem limites é o maior tesouro do homem."'
                            houseAbout="Fundada por Rowena Ravenclaw, a Corvinal é uma das quatro casas de Hogwarts.
                            Suas cores representativas são o Azul e o Bronze e seu animal emblemático é uma Águia.
                            O Fantasma Patrono da Corvinal é a Dama Cinzenta e corresponde ao elemento Ar, com o azul representando o céu e o bronze as penas de uma águia, possuindo relação direta com o elemento."
                            baseURLPath="./src/img/ravenclaw"
                            imgCharacteristics={[
                                {
                                    name: 'intelligence',
                                    alt: 'Símbolo de inteligência representado por um cérebro.',
                                    figcaption: 'Inteligência',
                                },
                                {
                                    name: 'knowledge',
                                    alt: 'Símbolo de conhecimento representado por um livro aberto.',
                                    figcaption: 'Conhecimento',
                                },
                            ]}
                            imgHouse={{
                                name: 'ravenclaw',
                                alt: 'Brasão da Corvinal e a personagem Luna Lovegood acima dele.',
                            }}
                        />
                        <House
                            houseTitle="Lufa-Lufa"
                            housePhrase='"A boa Lufa-Lufa recebeu os restantes e lhes ensinou tudo que conhecia."'
                            houseAbout="A Lufa-Lufa foi fundada por Helga Hufflepuff e faz parte do grupo de 4 casas de Hogwarts, sendo conhecida por ser a mais inclusiva de todas. Seu animal emblemático é um texugo e suas cores são o Amarelo, que representa o trigo, e o Preto, que simboliza o solo. Por isso, a Lufa-Lufa corresponde ao elemento Terra. Os alunos desta casa possuem excelentes habilidades com a matéria de Herbologia, graças a esta correspondência. Seu Fantasma Patrono é o Frei Gorducho."
                            baseURLPath="./src/img/hufflepuff"
                            imgCharacteristics={[
                                {
                                    name: 'dedication',
                                    alt: 'Símbolo de dedicação representado por um punho saindo do solo.',
                                    figcaption: 'Dedicação',
                                },
                                {
                                    name: 'loyalty',
                                    alt: 'Símbolo de lealdade representado por um aperto de mão.',
                                    figcaption: 'Lealdade',
                                },
                            ]}
                            imgHouse={{
                                name: 'hufflepuff',
                                alt: 'Brasão da Lufa-Lufa e o personagem Cedrico Diggory acima dele.',
                            }}
                        />
                    </Container>
                </Houses>
                <MainHall className="mainhall flex">
                    <Container>
                        <img
                            src={MainHallImg}
                            className="mainhall__img"
                            alt="Salão Principal de Hogwarts."
                        />
                        <div className="mainhall__content flex">
                            <h3 className="mainhall__title">Salão Principal</h3>
                            <p className="mainhall__description">
                                Considerada a principal área de recolhimento e é
                                onde os alunos fazem suas refeições (café da
                                manhã, almoço e jantar), recebem diariamente o
                                correio coruja, e têm certos eventos especiais
                                lá. Pode facilmente comportar todos os alunos,
                                funcionários e convidados da escola. Possui
                                muros altos que chegam até o teto, que é coberto
                                com velas e encantado para parecer com o céu
                                acima. Na parte da frente do salão, é a tabela
                                de funcionários, também conhecida como a Mesa
                                Principal, que é projetada para abrigar toda a
                                equipe de Hogwarts, e seu ponto mais alto é a
                                cadeira central onde o (a) atual diretor (a) se
                                senta.
                            </p>
                        </div>
                    </Container>
                </MainHall>
                <Dumbledore className="dumbledore flex">
                    <Container>
                        <InitialContent>
                            <div className="dumbledore__initial-content">
                                <h3 className="dumbledore__title">
                                    Alvo <br /> Dumbledore
                                </h3>
                                <p className="dumbledore__phrase">
                                    "Não vale a pena viver sonhando, e se
                                    esquecer de viver."
                                </p>
                            </div>
                        </InitialContent>
                        <div>
                            <p className="dumbledore__about">
                                O professor Alvo Percival Wulfrico Brian
                                Dumbledore foi um bruxo inglês mestiço que
                                ocupou o cargo de professor nas matérias de
                                Defesa Contra as Artes das Trevas e
                                Transfiguração, bem como diretor, na Escola de
                                Magia e Bruxaria de Hogwarts. Ele também atuou
                                como Cacique Supremo da Confederação
                                Internacional dos Bruxos e Bruxo Chefe da
                                Suprema Corte dos Bruxos. Um bruxo que apoiava
                                os direitos dos trouxas, embora o oposto
                                completo durante sua juventude, e que foi
                                considerado o maior bruxos dos tempos modernos
                                e, talvez, de todos os tempos.
                            </p>
                            <Button className="dumbledore__btn">
                                Ler bibliografia
                            </Button>
                        </div>
                    </Container>
                </Dumbledore>
            </main>
        </div>
    );
}

export default App;
