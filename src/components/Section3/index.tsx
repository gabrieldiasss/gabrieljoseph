import { Container, Content, Grid, Box } from './styles'

import { ElementsSection3 } from '../../types'

interface ElementsSectionProps {
    data: ElementsSection3[]
}

export default function Section3({ data }: ElementsSectionProps) {

    return (
        <Container>

            {data.map((value, key) => (
                <Content key={key} >
                    <h1>{value.title_section_3}</h1>
                    <div className='line'></div>

                    <Grid>
                        

                    </Grid>

                </Content>
            ))}
        </Container>
    )
}