import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/[id].module.css';

const Individ = ({ data }) => {
    const router = useRouter();
    const { id } = router.query;
    const found = data && data.find((element) => element.id === id);
    console.log(found);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imagewrapper}>
                    <Image src={found.image} fill></Image>
                </div>
                <div className={styles.info}>
                    <div className={styles.slice}>
                        Name: {found.name !== '' ? found.name : '-'}
                    </div>
                    <div className={styles.slice}>
                        Actor: {found.actor !== '' ? found.actor : '-'}
                    </div>
                    <div className={styles.slice}>
                        Ancestry: {found.ancestry !== '' ? found.ancestry : '-'}
                    </div>
                    <div className={styles.slice}>
                        Date Of Birth:{' '}
                        {found.dateOfBirth !== '' ? found.dateOfBirth : '-'}
                    </div>
                    <div className={styles.slice}>
                        Eye Colour:{' '}
                        {found.eyeColour !== '' ? found.eyeColour : '-'}
                    </div>
                    <div className={styles.slice}>
                        Gender: {found.gender !== '' ? found.gender : '-'}
                    </div>
                    <div className={styles.slice}>
                        Hair Colour:{' '}
                        {found.hairColour !== '' ? found.hairColour : '-'}
                    </div>
                    <div className={styles.slice}>
                        Hogwarts Staff: {found.hogwartsStaff ? 'Yes' : 'No'}
                    </div>
                    <div className={styles.slice}>
                        Hogwarts Student: {found.hogwartsStudent ? 'Yes' : 'No'}
                    </div>
                    <div className={styles.slice}>
                        House: {found.house !== '' ? found.house : '-'}
                    </div>
                    <div className={styles.slice}>
                        Patronous:{' '}
                        {found.patronous !== '' ? found.patronous : '-'}
                    </div>
                    <div className={styles.slice}>
                        Species: {found.species !== '' ? found.species : '-'}
                    </div>
                    <div className={styles.slice}>
                        Wizard: {found.wizard ? 'Yes' : 'No'}
                    </div>
                    <div className={styles.slice}>
                        Wand:
                        <ul className={styles.wandlist}>
                            <li>
                                Wood:{' '}
                                {found.wand.wood !== '' ? found.wand.wood : '-'}
                            </li>
                            <li>
                                Core:{' '}
                                {found.wand.core !== '' ? found.wand.core : '-'}
                            </li>
                            <li>
                                Length:{' '}
                                {found.wand.length !== ''
                                    ? found.wand.length
                                    : '-'}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
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
