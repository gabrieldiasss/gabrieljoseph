import { Text } from '../../types'
import { Container, Content, Grid } from './styles'

interface Section2Props {
    data: Text[]
}

export default function Section2({ data }: Section2Props) {

    return (
        <Container>

            <Content>

                {data.map((value, key) => (
                    <div key={key}>
                        <h1>{value.title_section_2}</h1>
                        <div className='line'></div>

                        <Grid>
                            {value.group_section_2.map((v, key) => (
                                <div key={key} >
                                    {v.box}
                                </div>
                            ))}
                        </Grid>

                        <h1>{value.title_2_section_2}</h1>
                        <p>Posts e Carrosséis profissionais!</p>
                    </div>
                ))}

            </Content>

        </Container>
    )
}




