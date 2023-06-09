import { HouseContainer } from './style';
import { Button } from '../Button';

interface HouseProps {
    houseTitle: string;
    housePhrase: string;
    houseAbout: string;
    imgCharacteristics: [
        { name: string; alt: string; figcaption: string },
        { name: string; alt: string; figcaption: string }
    ];
    imgHouse: {
        name: 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff';
        alt: string;
    };
}

export function House({
    houseTitle,
    housePhrase,
    houseAbout,
    imgCharacteristics,
    imgHouse,
}: HouseProps) {
    const wikiBaseURL = 'https://harrypotter.fandom.com/pt-br/wiki';

    return (
        <HouseContainer className="house flex" house={imgHouse.name}>
            <div className="house__content">
                <h3 className="house__title">{houseTitle}</h3>
                <p className="house__phrase">{housePhrase}</p>
                <p className="house__about">{houseAbout}</p>

                <div className="house__characteristics flex">
                    <figure className="house__characteristic">
                        <img
                            src={`${imgCharacteristics[0].name}.svg`}
                            alt={imgCharacteristics[0].alt}
                            loading="lazy"
                        />
                        <figcaption>
                            {imgCharacteristics[0].figcaption}
                        </figcaption>
                    </figure>

                    <figure className="house__characteristic">
                        <img
                            src={`${imgCharacteristics[1].name}.svg`}
                            alt={imgCharacteristics[1].alt}
                            loading="lazy"
                        />
                        <figcaption>
                            {imgCharacteristics[1].figcaption}
                        </figcaption>
                    </figure>
                </div>

                <a href={`${wikiBaseURL}/${houseTitle}`} target="_blank">
                    <Button className="house__btn" house={imgHouse.name}>
                        Leia Mais
                    </Button>
                </a>
            </div>
            <figure className="house__img">
                <img
                    src={`${imgHouse.name}.png`}
                    loading="lazy"
                    alt={imgHouse.alt}
                />
            </figure>
        </HouseContainer>
    );
}
