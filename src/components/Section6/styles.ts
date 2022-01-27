import styled from 'styled-components'

import { Instagram } from '@styled-icons/boxicons-logos/Instagram'

export const Container = styled.section`
    background-color: var(--background-black);
    padding: 4rem 0;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 1000px;
    margin: 0 auto;

    @media(max-width: 1000px) {
        display: block;
        text-align: center;
    }
`

export const Texts = styled.div`
    text-align: right;
    max-width: 500px;

    h1 {
        font-size: 3rem;
        color: rgba(255, 255, 255, 0.9);
    }

    h2 {
        font-size: 2rem;
        margin: 1.6rem 0;
        color: rgba(255, 255, 255, 0.8);
    }

    p {
        font-size: 1.4rem;
        line-height: 30px;
        color: rgba(255, 255, 255, 0.7);
    }

    @media(max-width: 1000px) {
        text-align: left;
    }

`

export const Img = styled.div`

    img {
        width: 35rem;

        @media(max-width: 1000px) {
            max-width: 100%;
            margin-top: 2rem;
        }
    }

`

export const Networks = styled.div`

    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
        color: #fff;
        font-size: 1.8rem;
        margin-left: 10px;
    }

    a:hover {
        text-decoration: underline;
    }

`

export const Insta = styled(Instagram)`
    color: #fff;
    width: 40px;
`