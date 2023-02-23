import CharacterCard from '@/components/CharacterCard';
import styles from '@/styles/Home.module.css';
import axios from 'axios';
import Head from 'next/head';

export default function Home({ data }) {
    return (
        <>
            <Head>
                <title>Harry Potter Wiki</title>
                <meta
                    name='description'
                    content='Wiki for all the characters and spells in Harry Potter by J.K Rowling'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
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
    const ids = data.map((element) => {
        return {
            params: { id: element.id },
        };
    });
    console.log(ids);
    return {
        props: { data }, // will be passed to the page component as props
    };
}
