
import { GlobalStyle } from "../styles/global"

import Head from 'next/head'

import Section1 from "../components/Section1/index"

import { GetStaticProps } from "next"
import { getPrismicClient } from "../services/prismic"
import Prismic from '@prismicio/client'

import { RichText, Link } from 'prismic-dom'

import { Text } from "../types"
import Section2 from "../components/Section2"

interface TextsProps {
    texts: Text[];
}

export default function Home({ texts }: TextsProps) {

    console.log(texts)

	return (

		<>
			<GlobalStyle />

			<Head>
				<title>Gabriel Joseph</title>
			</Head>

			<Section1 data={texts} />

            <Section2 data={texts} />
            
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {

    const prismic = getPrismicClient()

    const response = await prismic.query<any>([
        Prismic.predicates.at('document.type', 'section_1')
    ], {
        fetch: ['section_1.title', 'section_1.subtitle', 'section_1.link_button', 'section_1.old_price', 'section_1.new_price', 'section_1.title_section_2', 'section_1.group_section_2', 'section_1.title_2_section_2'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2))

    const texts = response.results.map(value => {

        return {
            title: RichText.asText(value.data.title),
            subtitle: RichText.asText(value.data.subtitle),
            link_button: Link.url(value.data.link_button),
            old_price: value.data.old_price,
            new_price: value.data.new_price,
            title_section_2: RichText.asText(value.data.title_section_2),
            group_section_2: value.data.group_section_2,
            title_2_section_2: RichText.asText(value.data.title_2_section_2)
        }
    })

    return {
        props: {
            texts
        }
    }
}


