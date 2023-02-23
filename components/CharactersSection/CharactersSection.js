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
                    <Link href={element.id} className={styles.characterBox}>
                        <div className={styles.imageWrapper}>
                            <Image
                                className={styles.image}
                                src={element.image}
                                fill
                            />
                        </div>
                        <span className={styles.characterName}>
                            {element.name}
                        </span>
                    </Link>
                ))}
            </div>
            <p className={styles.moreText}>
                And many
                <Link href='/characters'>
                    {' '}
                    <span className={styles.moreLink}>MORE</span>
                </Link>
            </p>
        </div>
    );
};

export default CharactersSection;
