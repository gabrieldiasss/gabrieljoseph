import { GetStaticProps } from "next"
import { getPrismicClint } from "../services/prismic"
import Prismic from '@prismicio/client'
import { RichText, Link } from 'prismic-dom'

type Text = {
	title: string;
	subtitle: string;
	link_button: string;
	old_price: number;
	new_price: number;
}

interface TextsProps {
	texts: Text[]
}

export default function Home({ texts }: TextsProps) {

	return (

		<>
			{texts.map((text, key) => (
				<div key={key} >
					<h1>{text.title}</h1>
					<h2>{text.subtitle}</h2>
					<button><a href={text.link_button}>QUERO APRENDER</a></button>
					<p>De {text.old_price} por {text.new_price} à vista.</p>
				</div>

			))}
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {

	const prismic = getPrismicClint()

	const response = await prismic.query<any>([
		Prismic.predicates.at('document.type', 'section_1'),
	], {
		fetch: ['section_1.title', 'section_1.subtitle', 'section_1.link_button', 'section_1.old_price', 'section_1.new_price'],
		pageSize: 100
	})

	console.log(JSON.stringify(response, null, 2))

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