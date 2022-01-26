import styled from 'styled-components'

export const Container = styled.section`
    background: #000;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width: 1000px) {
        text-align: center;
        display: block;
    }

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`

export const Texts = styled.div`

    margin-right: -5rem;

    @media(max-width: 1000px) {
            margin-right: 0;
        }

    h1 {
        font-size: 3rem;
        
        color: #fff;

        margin-top: 2rem;

        

        @media(max-width: 500px) {
            font-size: 2rem;
        }
    }

    h2 {
        color: rgb(255, 255, 255, 0.9);
        max-width: 500px;

        @media(max-width: 1000px) {
            margin: 1rem auto 0;
        }

        @media(max-width: 500px) {
            font-size: 1.2rem;
        }
    }

    img {
        width: 250px;
    }

    button {
        padding: 0.6rem 1rem;
        border-radius: 0.4rem;
        font-size: 2rem;
        color: rgb(255, 255, 255, 0.9);
        margin-top: 1.4rem;
        background-color: var(--red);
    }

    p {
        color: rgb(255, 255, 255, 0.9);
        margin-top: 1.2rem;
        font-size: 1.6rem;
    }
    
`

export const Img = styled.div`

    margin-left: 1rem;

    img {
        width: 35rem;

        @media(max-width: 1000px) {
            margin-top: 3rem;
        }

        @media(max-width: 500px) {
            max-width: 100%;
            height: auto;
        }
        
    }
    
`