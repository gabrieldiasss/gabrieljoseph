import { ElementsSection2 } from '../../types'
import { Container, Content, Grid } from './styles'

interface ElementsSectionProps {
    data: ElementsSection2[]
}

export default function Section2({ data }: ElementsSectionProps) {

    return (
        <Container>

            <Content>

                {data.map((value, key) => (
                    <div key={key}>
                        <h1>{value.title}</h1>
                        <div className='line'></div>

                        <Grid>
                            {value.group.map((v, key) => (
                                <div key={key} >
                                
                                </div>
                            ))}
                        </Grid>

                        <h1>{value.title_2}</h1>
                        <p>Posts e Carrosséis profissionais</p>
                    </div>
                ))}

            </Content>

        </Container>
    )
}




