
import { GlobalStyle } from "../styles/global"
import Head from 'next/head'
import Section1 from "../components/Section1/index"
import { GetStaticProps } from "next"
import { getPrismicClint } from "../services/prismic"
import Prismic from '@prismicio/client'

import { RichText, Link } from 'prismic-dom'
import { Text } from "../types"

interface TextsProps {
    texts: Text[]
}
export default function Home({ texts }: TextsProps) {

	return (

		<>
			<GlobalStyle />

			<Head>
				<title>Gabriel Joseph</title>
			</Head>

			<Section1 texts={texts} />

		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {

    const prismic = getPrismicClint()

    const response = await prismic.query<any>([
        Prismic.predicates.at('document.type', 'section_1'),
    ], {
        fetch: ['section_1.title', 'section_1.subtitle', 'section_1.link_button', 'section_1.old_price', 'section_1.new_price']
    })

    const texts = response.results.map(post => {

        return {
            title: RichText.asText(post.data.title),
            subtitle: RichText.asText(post.data.subtitle),
            link_button: Link.url(post.data.link_button),
            old_price: post.data.old_price,
            new_price: post.data.new_price,
        }
    })

    return {
        props: {
            texts
        }
    }
}


