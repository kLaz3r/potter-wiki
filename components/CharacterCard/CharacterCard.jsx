import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import placeholder from '../../assets/images.png';
import styles from './CharacterCard.module.scss';

const CharacterCard = ({ data }) => {
    return (
        <Link href={data.id} className={styles.wrapper}>
            <div className={styles.imagewrapper}>
                {data.image !== '' ? (
                    <Image
                        src={data.image}
                        className={styles.image}
                        fill
                        alt='Harry Potter'
                    ></Image>
                ) : (
                    <Image src={placeholder} fill alt='Harry Potter' />
                )}
            </div>
            {data.name !== '' ? (
                <span className={styles.name}>{data.name}</span>
            ) : (
                <span className={styles.name}>-</span>
            )}
        </Link>
    );
};

export default CharacterCard;
