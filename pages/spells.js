import Layout from '@/components/Layout/Layout';
import SpellCard from '@/components/SpellCard/SpellCard';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/spells.module.css';

export default function Spells({ data }) {
    console.log(data);
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

export async function getStaticProps() {
    const data = await axios
        .get('https://hp-api.onrender.com/api/spells')
        .then((res) => res.data);

    return {
        props: { data },
    };
}
