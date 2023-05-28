import { HouseContainer } from './style';
import { Button } from '../Button';

interface HouseProps {
    houseTitle: string;
    housePhrase: string;
    houseAbout: string;

    baseURLPath: string;
    imgCharacteristics: [
        { name: string; alt: string; figcaption: string },
        { name: string; alt: string; figcaption: string }
    ];

    imgHouse: [name: string, alt: string];
}

export function House({
    houseTitle,
    housePhrase,
    houseAbout,

    baseURLPath,
    imgCharacteristics,

    imgHouse,
}: HouseProps) {
    return (
        <HouseContainer className="house flex" house={`${imgHouse[0]}`}>
            <div className="house__content">
                <h3 className="house__title">{houseTitle}</h3>
                <p className="house__phrase">{housePhrase}</p>
                <p className="house__about">{houseAbout}</p>

                <div className="house__characteristics flex">
                    <figure className="house__characteristic">
                        <img
                            src={`${baseURLPath}/${imgCharacteristics[0].name}.svg`}
                            alt={imgCharacteristics[0].alt}
                        />
                        <figcaption>
                            {imgCharacteristics[0].figcaption}
                        </figcaption>
                    </figure>

                    <figure className="house__characteristic">
                        <img
                            src={`${baseURLPath}/${imgCharacteristics[1].name}.svg`}
                            alt={imgCharacteristics[1].alt}
                        />
                        <figcaption>
                            {imgCharacteristics[1].figcaption}
                        </figcaption>
                    </figure>
                </div>

                <Button house={`${imgHouse[0]}`}>Leia Mais</Button>
            </div>
            <figure className="house__img">
                <img
                    src={`${baseURLPath}/${imgHouse[0]}.png`}
                    alt={imgHouse[1]}
                />
            </figure>
        </HouseContainer>
    );
}
