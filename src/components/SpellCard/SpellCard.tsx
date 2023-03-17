import React from "react";
import styles from "./SpellCard.module.css";

type Spell = {
    name: string;
    description: string;
    id: string;
};

type Props = {
    data: Spell;
    isTransparent?: boolean;
};

const SpellCard = ({ data, isTransparent }: Props) => {
    const wrapperStyle = isTransparent
        ? styles.wrapperTransparent
        : styles.wrapperNormal;
    return (
        <div className={wrapperStyle}>
            <h1 className={styles.spellTitle}>{data.name}</h1>
            <p className={styles.spellDescription}>{data.description}</p>
        </div>
    );
};

export default SpellCard;
