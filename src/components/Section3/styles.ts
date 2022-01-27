import styled from 'styled-components'

export const Container = styled.section`
    background-color: var(--background-black);
`

export const Content = styled.div`

    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    margin: 0 auto;
    max-width: 900px;

    color: #fff;

    h1 {
        font-size: 3rem;

        @media(max-width: 1000px) {
            text-align: center;
        } 
    }

    .line {
        width: 60%;
        height: 10px;
        margin: 3rem auto;
        background: linear-gradient(45deg, rgba(255, 46, 46, 0.1), rgba(255, 46, 46), rgba(255, 46, 46), rgba(255, 46, 46), rgba(255, 46, 46, 0.1));
    }

    
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    grid-gap: 3rem;

    @media(max-width: 1000px) {
        grid-template-columns: 1fr;
    } 

`

export const Box = styled.div`

    text-align: right;
    
    h1 {
        font-size: 4rem;
    }

    p {
        font-size: 2rem;
        
        font-weight: 600;
    }

    @media(max-width: 1000px) {
        text-align: center;
    } 

`