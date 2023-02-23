import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1200px;
    width: 80vw;
    height: 75vh;
    margin: auto;
`;
const ImageWrapper = styled.div`
    position: relative;
    width: 50%;
    img {
        object-fit: cover;
    }
`;
const Info = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: bold;
    padding-left: 2rem;
    .slice {
        ul {
            margin-left: 2rem;
            font-size: 1.5rem;
        }
    }
`;

const Individ = ({ data }) => {
    const router = useRouter();
    const { id } = router.query;
    const found = data && data.find((element) => element.id === id);
    console.log(found);
    return (
        <Container>
            <Wrapper>
                <ImageWrapper>
                    <Image src={found.image} fill></Image>
                </ImageWrapper>
                <Info>
                    <div className='slice'>
                        Name: {found.name !== '' ? found.name : '-'}
                    </div>
                    <div className='slice'>
                        Actor: {found.actor !== '' ? found.actor : '-'}
                    </div>
                    <div className='slice'>
                        Ancestry: {found.ancestry !== '' ? found.ancestry : '-'}
                    </div>
                    <div className='slice'>
                        Date Of Birth:{' '}
                        {found.dateOfBirth !== '' ? found.dateOfBirth : '-'}
                    </div>
                    <div className='slice'>
                        Eye Colour:{' '}
                        {found.eyeColour !== '' ? found.eyeColour : '-'}
                    </div>
                    <div className='slice'>
                        Gender: {found.gender !== '' ? found.gender : '-'}
                    </div>
                    <div className='slice'>
                        Hair Colour:{' '}
                        {found.hairColour !== '' ? found.hairColour : '-'}
                    </div>
                    <div className='slice'>
                        Hogwarts Staff: {found.hogwartsStaff ? 'Yes' : 'No'}
                    </div>
                    <div className='slice'>
                        Hogwarts Student: {found.hogwartsStudent ? 'Yes' : 'No'}
                    </div>
                    <div className='slice'>
                        House: {found.house !== '' ? found.house : '-'}
                    </div>
                    <div className='slice'>
                        Patronous:{' '}
                        {found.patronous !== '' ? found.patronous : '-'}
                    </div>
                    <div className='slice'>
                        Species: {found.species !== '' ? found.species : '-'}
                    </div>
                    <div className='slice'>
                        Wizard: {found.wizard ? 'Yes' : 'No'}
                    </div>
                    <div className='slice'>
                        Wand:
                        <ul>
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
                </Info>
            </Wrapper>
        </Container>
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
