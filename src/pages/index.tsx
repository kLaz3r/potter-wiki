import axios from "axios";
import Head from "next/head";
import CharactersSection from "src/components/CharactersSection/CharactersSection";
import Hero from "src/components/Hero/Hero";
import Layout from "src/components/Layout/Layout";
import SpellsSection from "src/components/SpellsSection/SpellsSection";

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

export default function Home({ data }: Props) {
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
