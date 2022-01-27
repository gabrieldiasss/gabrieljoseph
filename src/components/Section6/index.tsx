import { ElementsSection6 } from '../../types'
import { Container, Content, Texts, Img, Networks, Insta } from './styles'

interface ElementsSectionProps {
    data: ElementsSection6[]
}

export default function Section6({ data }: ElementsSectionProps) {

    return (

        <Container>

            <Content>

                {data.map((value, key) => (
                    <Texts key={key}>
                        <h1>{value.title}</h1>

                        <h2>{value.subtitle}</h2>

                        <p>
                            {value.text}
                        </p>
                    </Texts>
                ))}

                <Img>
                    <img src="/images/gabriel.png" alt="Gabriel Joseph" />
                </Img>

            </Content>

            <Networks>
                <Insta />
                <a href='https://www.instagram.com/gabrieljosephoficial/'>@gabrieljosephoficial</a>
            </Networks>

        </Container>
    )
}