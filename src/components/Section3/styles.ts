import styled from 'styled-components'

export const Container = styled.section`
    background-color: var(--background-black);
`

export const Content = styled.div`

    padding-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;

    h1 {
        font-size: 3rem;
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

`

export const Box = styled.div`

    text-align: right;
    
    h1 {
        font-size: 4rem;
    }

    p {
        font-size: 2rem;
        max-width: 280px;
        font-weight: 600;
    }

`