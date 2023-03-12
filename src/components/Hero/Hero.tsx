import Image from "next/image";
import React from "react";
import hogwarts from "src/assets/hogwarts.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.imagewrapper}>
                <Image
                    src={hogwarts}
                    fill
                    priority
                    alt="Hero Section Background Image"
                ></Image>
            </div>
            <div className={styles.herogradient}>
                <div className={styles.herotext}>
                    <h1 className={styles.heroh1}>
                        Enter the Wizarding World: Unleash Your Inner Hero with
                        Harry Potter
                    </h1>
                    <p className={styles.herop}>
                        Discover your magical potential and embark on an
                        unforgettable adventure
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
