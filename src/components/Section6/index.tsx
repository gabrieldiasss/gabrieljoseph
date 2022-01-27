import { Container, Content, Texts, Img, Networks, Insta } from './styles'

export default function Section6() {

    return (

        <Container>

            <Content>

                <Texts>

                    <h1>Prazer, eu sou Gabriel Joseph,</h1>

                    <h2>Talvez você ainda não me conheça</h2>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quas quisquam dignissimos omnis esse deleniti aliquid quos quis pariatur eius consectetur officiis incidunt amet minus debitis sapiente optio sed nisi.

                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ut, illum veniam praesentium debitis error necessitatibus omnis velit molestias a blanditiis dolore assumenda eaque? Quia nulla laudantium voluptate corporis consectetur?
                    </p>

                </Texts>

                <Img>
                    <img src="/images/gabriel.png" alt="Gabriel Joseph" />
                </Img>

            </Content>

            <Networks>
                <Insta />
                <a href='https://www.instagram.com' >@gabrieljosephoficial</a>
            </Networks>

        </Container>
    )
}