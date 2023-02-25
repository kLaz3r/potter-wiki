import React from 'react';
import styles from './SpellCard.module.css';

const SpellCard = ({ data, isTransparent }) => {
    const wrapperStyle = isTransparent
        ? styles.wrapperTransparent
        : styles.wrapperNormal;
    return (
        <div className={wrapperStyle}>
            <h1 className={styles.spellTitle}>{data.name}</h1>
            <h6 className={styles.spellDescription}>{data.description}</h6>
        </div>
    );
};

export default SpellCard;
