import styled from 'styled-components'

export const Container = styled.section`
    padding: 2rem 0;
`
export const Content = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    @media(max-width: 1200px) {
        display: block;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Texts = styled.div`

    max-width: 500px;

    > h1 {
        font-size: 4rem; 
        text-align: right;

        
    }

    h2 {
        font-size: 2rem;
        text-align: right;
    }

    @media(max-width: 1200px) {

        max-width: 700px;

        h1, h2 {
            text-align: center;
            margin-top: 1rem;
        }
    }

    @media(max-width: 500px) {

        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 1.8rem;
        }
        
     }

`
export const Img = styled.div`

    img {
        width: 40rem;

        @media(max-width: 1200px) {
            max-width: 100%;
        }
    }

`
export const Price = styled.div`

    margin-top: 1rem;

    p {
        font-size: 2rem;
        font-weight: 600;
    }
    
    h1 {
        font-size: 3rem;
    }

    @media(max-width: 1200px) {
        text-align: center;
    }

`

export const Bottom = styled.div`
    margin-top: 3rem;
    text-align: center;

    button {
        margin: 0 2rem;
    }

    p {
        margin-top: 1rem;
        font-size: 1.6rem;
    }
`