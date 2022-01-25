import Image from 'next/image'

import Logo from '../../images/logo.png'
import GabrielJoseph from '../../images/gabriel.png'
import { Text } from '../../types'

import { Container, Content, Texts, Img } from './styles'

interface Section1Props {
    texts: Text[]
}

export default function Section1({ texts }: Section1Props) {

    return (
        <Container>
            <Content>
                <Texts>
                    <img src="/images/logo.png" alt="" />

                    {texts.map((text, key) => (
                        <div key={key} >
                            <h1>{text.title}</h1>
                            <h2>{text.subtitle}</h2>
                            <button style={{backgroundColor: "#FE0000"}} >QUERO APRENDER</button>
                            <p>De <span>R${text.old_price}</span> por R${text.new_price} à vista.</p>
                        </div>
                    ))}
                </Texts>

                <Img>
                    <img
                        src="/images/gabriel.png"
                    />
                </Img>
            </Content>
        </Container>
    )
}

