import React from 'react';
import styles from './SpellCard.module.css';

const SpellCard = ({ data, isTransparent }) => {
    const wrapperStyle = isTransparent
        ? styles.wrapperTransparent
        : styles.wrapperNormal;
    return (
        <div className={wrapperStyle}>
            <p className={styles.spellTitle}>{data.name}</p>
            <p className={styles.spellDescription}>{data.description}</p>
        </div>
    );
};

export default SpellCard;
