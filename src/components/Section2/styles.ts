import styled from 'styled-components'

export const Container = styled.section`
    text-align: center;

    padding: 2rem 0;
`

export const Content = styled.div`

    width: 90%;
    max-width: 1100px;
    margin: 0 auto;

    div {

        h1 {
            font-size: 2.4rem;
            max-width: 800px;
            margin: 2rem auto 0;
        }

        .line {
            width: 80%;
            height: 10px;
            margin: 3rem auto;
            background: linear-gradient(45deg, rgba(255, 46, 46, 0.1), rgba(255, 46, 46), rgba(255, 46, 46), rgba(255, 46, 46), rgba(255, 46, 46, 0.1));
        }

        p {
            max-width: 38rem;
            margin: 1rem auto;
            font-size: 2rem;
            background-color: #fe0000;
            border-radius: 5px;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
            padding: 0.4rem 2rem;
            color: #Fff;
            font-family: Poppins;
            font-weight: 700;
        }

    }

`

export const Grid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    div {
        background-color: #FFABAB;
        font-size: 2.4rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 0.8rem;
    }
`