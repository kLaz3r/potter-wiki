import axios from "axios";
import Head from "next/head";
import CharacterCard from "src/components/CharacterCard/CharacterCard";
import Layout from "src/components/Layout/Layout";
import styles from "src/styles/characters.module.css";

type Character = {
    id: string;
    name: string;
    actor: string;
    ancestry: string;
    dateOfBirth: string;
    eyeColour: string;
    gender: string;
    hairColour: string;
    hogwartsStaff: boolean;
    hogwartsStudent: boolean;
    image: string;
    species: string;
    house: string;
    patronus: string;
    wizard: boolean;
    wand: {
        wood: string;
        core: string;
        length: string;
    };
};

type Props = {
    data: Character[];
};

export default function Characters({ data }: Props) {
    return (
        <>
            <Head>
                <title>Harry Potter Wiki | Characters</title>
            </Head>
            <Layout>
                <div className={styles.main}>
                    {data &&
                        data.map((element, index) => (
                            <CharacterCard
                                index={index}
                                data={element}
                                key={element.id}
                            />
                        ))}
                </div>
            </Layout>
        </>
    );
}

type CharacterResponse = {
    data: Character[];
};

export async function getStaticProps() {
    const { data }: CharacterResponse = await axios.get(
        "https://hp-api.onrender.com/api/characters"
    );

    return {
        props: { data },
    };
}
