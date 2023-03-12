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
            <p className={styles.spellTitle}>{data.name}</p>
            <p className={styles.spellDescription}>{data.description}</p>
        </div>
    );
};

export default SpellCard;
