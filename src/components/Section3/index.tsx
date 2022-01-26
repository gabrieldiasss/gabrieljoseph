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
                    <h1>{value.title}</h1>
                    <div className='line'></div>

                    <Grid>
                        
                        {value.group.map((v, key) => (
                            <Box key={key} >
                                <h1>{v.box_number_section_3[0].text}</h1>
                                <p>{v.box_section_3[0].text}</p> 
                            </Box>
                        ))}

                    </Grid>

                </Content>
            ))}
        </Container>
    )
}