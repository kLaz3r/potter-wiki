import CharacterCard from '@/components/CharacterCard/CharacterCard';
import Layout from '@/components/Layout/Layout';
import styles from '@/styles/characters.module.css';
import axios from 'axios';
import Head from 'next/head';

export default function Characters({ data }) {
    return (
        <>
            <Head>
                <title>Harry Potter Wiki | Characters</title>
            </Head>
            <Layout>
                <div className={styles.main}>
                    {data &&
                        data.map((element) => (
                            <CharacterCard data={element} key={element.id} />
                        ))}
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const data = await axios
        .get('https://hp-api.onrender.com/api/characters')
        .then((res) => res.data);

    return {
        props: { data },
    };
}
