import Image from "next/image";
import Link from "next/link";
import React from "react";
import spellsImg from "../../assets/spells.jpg";
import SpellCard from "../SpellCard/SpellCard";
import styles from "./SpellsSection.module.css";

const spells = [
    {
        id: "1",
        name: "AVADA KEDAVRA",
        description:
            "Also known as The Killing Curse, the most evil spell in the Wizarding World; one of three Unforgivable Curses; Harry Potter is the only known witch or wizard to survive it",
    },
    {
        id: "2",
        name: "WINGARDIUM LEVIOSA",
        description:
            "Causes an object to levitate; but remember what Hermione said: \"It's Wing-gar-dium Levi-o-sa, make the 'gar' nice and long.\"",
    },
    {
        id: "3",
        name: "STUPEFY",
        description:
            "The Stunning spell freezes objects and renders living targets unconscious",
    },
    {
        id: "4",
        name: "EXPELLIARMUS",
        description:
            "Forces an opponent to drop whatever's in their possession",
    },
];

const SpellsSection = () => {
    return (
        <div className={styles.container}>
            <Image
                alt="Spells Section Background Image"
                fill
                src={spellsImg}
                className={styles.backgroundImage}
            ></Image>
            <div className={styles.wrapper}>
                <Link href="/spells" className={styles.spellsContainer}>
                    {spells.map((element) => (
                        <SpellCard
                            isTransparent
                            key={element.id}
                            data={element}
                        />
                    ))}
                </Link>
                <div className={styles.headingContainer}>
                    <h1 className={styles.sectionTitle}>
                        Master the Art of Spellcasting: Learn the Most Iconic
                        Spells of the Wizarding World
                    </h1>
                    <h2 className={styles.sectionDescription}>
                        From Wingardium Leviosa to Expelliarmus, explore the
                        spells that have captivated fans for generations and
                        harness the power of magic like never before. Click on
                        the spells to learn more.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default SpellsSection;
