
import { Container, Content, Texts, Img } from './styles'


import { Text } from '../../types'

interface Section1Props {
    data: Text[]
}

export default function Section1({ data }: Section1Props) {

    return (
        <Container>
            <Content>
                <Texts>
                    <img src="/images/logo.png" alt="" />

                    {data.map((value, key) => (
                        <div key={key} >
                            <h1>{value.title}</h1>
                            <h2>{value.subtitle}</h2>
                            <a href={value.link_button}><button>QUERO APRENDER</button></a>
                            <p>De {value.old_price} para {value.new_price} à vista.</p>
                        </div>
                    ))}
                </Texts>

                <Img>
                    <img src="/images/gabriel.png"/>
                </Img>
            </Content>
        </Container>
    )
}

