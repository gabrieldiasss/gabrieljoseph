
import { GlobalStyle } from "../styles/global"

import Head from 'next/head'

import Section1 from "../components/Section1/index"




import { GetStaticProps } from "next"
import { getPrismicClient } from "../services/prismic"
import Prismic from '@prismicio/client'

import { RichText, Link } from 'prismic-dom'

import { ElementsSection1, ElementsSection2, ElementsSection3, ElementsSection4 } from "../types"

import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section4 from "../components/Section4"
import Section5 from "../components/Section5"

interface ElementsProps {
    elementsSection1: ElementsSection1[];
    elementsSection2: ElementsSection2[];
    elementsSection3: ElementsSection3[];
    elementsSection4: ElementsSection4[];
}

export default function Home({ elementsSection1, elementsSection2, elementsSection3, elementsSection4}: ElementsProps) {

    console.log(elementsSection1)
    console.log(elementsSection2)
    console.log(elementsSection3)

    return (

        <>
            <GlobalStyle />

            <Head>
                <title>Gabriel Joseph</title>
            </Head>

            <Section1 data={elementsSection1} />

            <Section2 data={elementsSection2} />

            <Section3 data={elementsSection3} />

            <Section4 data={elementsSection4} />

            <Section5 />

        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const prismic = getPrismicClient()

    const response = await prismic.query<any>([
        Prismic.predicates.at('document.type', 'section_1')
    ], {
        fetch: ['section_1.title', 'section_1.subtitle', 'section_1.link_button', 'section_1.old_price', 'section_1.new_price', 'section_1.title_section_2', 'section_1.group_section_2', 'section_1.title_2_section_2', 'section_1.title_section_3', 'section_1.section_3_group', 'section_1.title_section_4', 'section_1.group_section_4'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2))

    const elementsSection1 = response.results.map(value => {

        return {
            title: RichText.asText(value.data.title),
            subtitle: RichText.asText(value.data.subtitle),
            link_button: Link.url(value.data.link_button),
            old_price: new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }).format(value.data.old_price),
            new_price: new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }).format(value.data.new_price),
        }
    })


    const elementsSection2 = response.results.map(value => {

        return {
            title: RichText.asText(value.data.title_section_2),
            group: value.data.group_section_2,
            title_2: RichText.asText(value.data.title_2_section_2),
        }
    })

    const elementsSection3 = response.results.map(value => {

        return {
            title: RichText.asText(value.data.title_section_3),
            group: value.data.section_3_group,
        }

    })

    const elementsSection4 = response.results.map(value => {

        return {
            title: RichText.asText(value.data.title_section_4),
            group: value.data.group_section_4,
        }

    })

    return {
        props: {
            elementsSection1, elementsSection2, elementsSection3, elementsSection4
        },
        revalidate: 10
    }
}


