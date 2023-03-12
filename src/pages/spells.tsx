import axios from "axios";
import Head from "next/head";
import Layout from "src/components/Layout/Layout";
import SpellCard from "src/components/SpellCard/SpellCard";
import styles from "../styles/spells.module.css";

type Spell = {
    id: string;
    description: string;
    name: string;
};

type Props = {
    data: Spell[];
};

export default function Spells({ data }: Props) {
    return (
        <>
            <Head>
                <title>Harry Potter Wiki | Spells</title>
            </Head>
            <Layout>
                <div className={styles.spellsContainer}>
                    {data &&
                        data.map((element) => (
                            <SpellCard
                                key={element.id}
                                data={element}
                            ></SpellCard>
                        ))}
                </div>
            </Layout>
        </>
    );
}

type SpellResponse = {
    data: Spell[];
};

export async function getStaticProps() {
    const { data }: SpellResponse = await axios.get(
        "https://hp-api.onrender.com/api/spells"
    );

    return {
        props: { data },
    };
}
