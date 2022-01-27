import { 
    Container, Content, Texts, Img, Price, Bottom
} from './styles'

export default function Section5() {

    

    return (
        <Container>

           <Content>

                <Img>
                    <img src="/images/member.png" alt="Aréa de Membros Gabriel Joseph" />
                </Img>

                <Texts>

                    <h1>Acesse o curso a qualquer momento!</h1>

                    <h2>Tudo isso para que você possa assistir as aulas no seu tempo</h2>

                    <Price>
                        <p>Apenas</p>
                        <h1>R$ 97,00</h1>
                    </Price>

                </Texts>

            </Content> 

            <Bottom>
                <button>SIM, EU QUERO UMA VAGA</button>
                <p>Garantia de 7 dias</p>
            </Bottom>
        </Container>
    )
}