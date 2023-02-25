import CharactersSection from '@/components/CharactersSection/CharactersSection';
import Hero from '@/components/Hero/Hero';
import Layout from '@/components/Layout/Layout';
import SpellsSection from '@/components/SpellsSection/SpellsSection';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/index.module.css';

export default function Home({ data }) {
    return (
        <>
            <Head>
                <title>Harry Potter Wiki | Home</title>
            </Head>
            <Layout>
                <Hero />
                <CharactersSection data={data} />
                <SpellsSection />
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
