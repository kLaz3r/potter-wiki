import Layout from '@/components/Layout/Layout';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/[id].module.css';

const Individ = ({ data }) => {
    const router = useRouter();
    const { id } = router.query;
    const found = data && data.find((element) => element.id === id);
    return (
        <>
            <Head>
                <title>Harry Potter Wiki | {found.name}</title>
            </Head>
            <Layout>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.imagewrapper}>
                            <Image src={found.image} fill></Image>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>Name:</span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.name !== '' ? found.name : '-'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>Actor:</span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.actor !== '' ? found.actor : '-'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Ancestry:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.ancestry !== ''
                                        ? found.ancestry
                                        : '-'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Date of Birth:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.dateOfBirth !== null
                                        ? found.dateOfBirth
                                        : '-'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Eye Colour:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.eyeColour !== ''
                                        ? found.eyeColour
                                        : '-'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Gender:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.gender !== '' ? found.gender : '-'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Hair Colour:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.hairColour !== ''
                                        ? found.hairColour
                                        : '-'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Hogwarts Staff:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.hogwartsStaff ? 'Yes' : 'No'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Hogwarts Student:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.hogwartsStudent ? 'Yes' : 'No'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>House:</span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.house !== '' ? found.house : '-'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Patronus:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.patronus !== ''
                                        ? found.patronus
                                        : '-'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Species:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.species !== '' ? found.species : '-'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Wizard:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.wizard ? 'Yes' : 'Nos'}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Wand Wood:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.wand.wood === '' ||
                                    found.wand.wood === null
                                        ? '-'
                                        : found.wand.wood}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Wand Core:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.wand.core === '' ||
                                    found.wand.core === null
                                        ? '-'
                                        : found.wand.core}
                                </span>
                            </div>
                            <div className={styles.slice}>
                                <span className={styles.sliceName}>
                                    Wand Length:
                                </span>{' '}
                                <span className={styles.sliceValue}>
                                    {found.wand.length === '' ||
                                    found.wand.length === null
                                        ? '-'
                                        : found.wand.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Individ;

export async function getStaticProps() {
    const data = await axios
        .get('https://hp-api.onrender.com/api/characters')
        .then((res) => res.data);

    return {
        props: { data },
    };
}
export async function getStaticPaths() {
    const data = await axios
        .get('https://hp-api.onrender.com/api/characters')
        .then((res) => res.data);
    const ids = data.map((element) => {
        return {
            params: { id: element.id },
        };
    });
    return {
        paths: ids,
        fallback: false,
    };
}
