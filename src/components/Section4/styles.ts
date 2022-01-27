import styled from 'styled-components'

export const Container = styled.section`
    background-color: var(--background-black);
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;

    text-align: center;


`

export const Title = styled.h1`
   
    background: #fff;
    width: 100%;

    padding: 2rem 0;

    div {

        width: 90%;
        margin: 0 auto;

        h1 {
            font-size: 3rem;
            max-width: 800px;
            margin: 0 auto;
        }
    }

 
`

export const Grid = styled.div`

    background-color: var(--background-black);

    padding: 2rem 0;

    @media(max-width: 1000px) {
        width: 90%;
    }

    div {

        padding: 1.6rem 8rem;
        
        background: linear-gradient(to left, #ff2e2e1a, #ff2e2e, #ff2e2e, #ff2e2e, #ff2e2e, #ff2e2e1a );

        color: rgba(255, 255, 255, 0.9);

        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.4rem;
            max-width: 650px;
        }

        & + div {
            margin-top: 1.6rem;
        }

        @media(max-width: 500px) {
            padding: 1.6rem 3rem;
        }
 
    }
`