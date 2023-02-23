import CharactersSection from '@/components/CharactersSection/CharactersSection';
import Hero from '@/components/Hero/Hero';
import Layout from '@/components/Layout/Layout';
import axios from 'axios';
import styles from '../styles/index.module.css';

export default function Home({ data }) {
    return (
        <Layout>
            <Hero />
            <CharactersSection data={data} />
        </Layout>
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
