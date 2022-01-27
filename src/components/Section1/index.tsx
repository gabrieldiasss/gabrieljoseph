
import { Container, Content, Texts, Img } from './styles'


import { ElementsSection1 } from '../../types'

interface ElementsSectionProps {
    data: ElementsSection1[]
}

export default function Section1({ data }: ElementsSectionProps) {

    return (
        <Container>
            <Content>
                <Texts>
                    <img src="/images/logo.png" alt="Logo Posts e Carrosséis" />

                    {data.map((value, key) => (
                        <div key={key} >
                            <h1>{value.title}</h1>
                            <h2>{value.subtitle}</h2>
                            <a href={value.link_button}><button>QUERO APRENDER</button></a>
                            <p>De {value.old_price} por {value.new_price} à vista.</p>
                        </div>
                    ))}
                </Texts>

                <Img>
                    <img src="/images/gabriel.png" alt="Gabriel Joseph Posts e Carrosséis profissionais"/>
                </Img>
            </Content>
        </Container>
    )
}

