import CharacterCard from '@/components/CharacterCard/CharacterCard';
import styles from '@/styles/characters.module.css';
import axios from 'axios';
import Head from 'next/head';

export default function Home({ data }) {
    return (
        <>
            <main className={styles.main}>
                {data.map((element) => (
                    <CharacterCard data={element} key={element.id} />
                ))}
            </main>
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
