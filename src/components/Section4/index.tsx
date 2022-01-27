
import { ElementsSection4 } from '../../types'
import {
    Container,
    Title,
    Content,
    Grid
} from './styles'

interface ElementsSectionProps {
    data: ElementsSection4[]
}

export default function Section4({ data }: ElementsSectionProps) {

    return (

        <Container>

            {data.map((value, key) => (
                <Content key={key}>
                    <Title>
                        <div>
                            <h1>{value.title}</h1>
                        </div>

                    </Title>

                    <Grid key={key} >
                        {value.group.map((v, key) => (
                            <div key={key} >
                                <h1>{v.title1[0].text}</h1>
                                <p>{v.about[0].text}</p>
                            </div>
                        ))}
                    </Grid>


                </Content>
            ))}



        </Container>
    )

} 