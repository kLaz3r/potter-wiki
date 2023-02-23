import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import placeholder from '../assets/images.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    max-height: 100%;
    margin: 1rem;
`;
const ImageWrapper = styled.div`
    position: relative;
    width: 50%;
    height: 341px;
    img {
        object-fit: cover;
    }
`;
const Info = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Text = styled.div`
    margin-left: 1rem;
    h5 {
        text-align: start;
        display: block;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
    span {
        display: block;
        text-align: center;
        font-size: 1.7rem;
        text-transform: capitalize;
        border-bottom: 1px solid gray;
    }
    .Link {
        display: block;
        width: 100%;
        background-color: gray;
        border-radius: 20px;
        text-align: center;
        font-weight: bold;
        margin-top: 1rem;
        font-size: 1rem;
        padding: 0.5rem;
    }
`;

const CharacterCard = ({ data }) => {
    return (
        <Wrapper>
            <ImageWrapper>
                {data.image !== '' ? (
                    <Image src={data.image} fill></Image>
                ) : (
                    <Image src={placeholder} fill />
                )}
            </ImageWrapper>
            <Info>
                <Text>
                    <h5>Name: </h5>
                    {data.name !== '' ? (
                        <span>{data.name}</span>
                    ) : (
                        <span>-</span>
                    )}
                </Text>
                <Text>
                    <h5>Actor: </h5>
                    {data.actor !== '' ? (
                        <span>{data.actor}</span>
                    ) : (
                        <span>-</span>
                    )}
                </Text>
                <Text>
                    <h5>Ancestry: </h5>
                    {data.ancestry !== '' ? (
                        <span>{data.ancestry}</span>
                    ) : (
                        <span>-</span>
                    )}
                </Text>
                <Text>
                    <h5>Date of Birth: </h5>
                    {data.dateOfBirth !== null ? (
                        <span>{data.dateOfBirth}</span>
                    ) : (
                        <span>-</span>
                    )}
                </Text>
                <Text>
                    <h5>Gender: </h5>
                    {data.gender !== '' ? (
                        <span>{data.gender}</span>
                    ) : (
                        <span>-</span>
                    )}
                </Text>
                <Text>
                    <Link className='Link' href={data.id}>
                        Learn More
                    </Link>
                </Text>
            </Info>
        </Wrapper>
    );
};

export default CharacterCard;
