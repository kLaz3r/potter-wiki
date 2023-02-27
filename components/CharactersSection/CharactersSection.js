import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './CharactersSection.module.css';

const CharactersSection = ({ data }) => {
    const charactersShowed = data.slice(0, 4);
    console.log(charactersShowed);
    return (
        <div className={styles.sectionWrapper}>
            <h1 className={styles.sectionTitle}>
                Meet the Unforgettable Characters of Hogwarts School of
                Witchcraft and Wizardry
            </h1>
            <div className={styles.charactersContainer}>
                {charactersShowed.map((element) => (
                    <Link
                        key={element.id}
                        href={element.id}
                        className={styles.characterBox}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                alt={element.name}
                                className={styles.image}
                                src={element.image}
                                fill
                            />
                        </div>
                        <span className={styles.characterName}>
                            <p>{element.name}</p>
                        </span>
                    </Link>
                ))}
            </div>
            <p className={styles.moreText}>
                <Link href='/characters'>
                    {' '}
                    <span className={styles.moreLink}>
                        And many more characters
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default CharactersSection;
