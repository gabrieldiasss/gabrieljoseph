import { ElementsSection5 } from '../../types'
import {
    Container, Content, Texts, Img, Price, Bottom
} from './styles'

interface ElementsSectionProps {
    data: ElementsSection5[]
}

export default function Section5({ data }: ElementsSectionProps) {

    return (
        <>
            {data.map((value, key) => (
                <Container key={key} >

                    <Content>

                        <Img>
                            <img src="/images/member.png" alt="Aréa de Membros Gabriel Joseph" />
                        </Img>

                        <Texts key={key}>

                            <h1>{value.title}</h1>

                            <h2>{value.subtitle}</h2>

                            <Price>
                                <p>Apenas</p>
                                <h1>{value.price}</h1>
                            </Price>

                        </Texts>



                    </Content>

                    <Bottom>
                        <a href={value.link_button}><button type="button" >SIM, EU QUERO UMA VAGA</button></a>
                        <p>Garantia de 7 dias</p>
                    </Bottom>

                    
                </Container>
            ))}
        </>
    )
}