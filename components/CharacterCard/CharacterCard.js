import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import placeholder from '../../assets/images.png';
import styles from './CharacterCard.module.css';

const CharacterCard = ({ data }) => {
    return (
        <Link href={data.id} className={styles.wrapper}>
            <div className={styles.imagewrapper}>
                {data.image !== '' ? (
                    <Image
                        src={data.image}
                        className={styles.image}
                        fill
                        alt={data.name}
                    ></Image>
                ) : (
                    <Image src={placeholder} fill alt={data.name} />
                )}
            </div>
            {data.name !== '' ? (
                <p className={styles.name}>
                    <span>{data.name}</span>
                </p>
            ) : (
                <span className={styles.name}>-</span>
            )}
        </Link>
    );
};

export default CharacterCard;
