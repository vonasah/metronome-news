import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	// Получаем все опубликованные статьи (не draft)
	const articles = await getCollection('articles', ({ data }) => !data.draft);

	// Сортируем по дате — самые свежие сверху
	articles.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

	// Берём первые 30 статей
	const recentArticles = articles.slice(0, 30);

	return rss({
		title: 'Metronome News',
		description: 'Independent crypto and Web3 journalism. Original analysis, hard data, no hype. Daily coverage of Bitcoin, Ethereum, DeFi, NFT, regulation, and markets.',
		site: context.site,
		items: recentArticles.map((article) => ({
			title: article.data.title,
			pubDate: article.data.publishDate,
			description: article.data.description,
			author: article.data.author + ' (raptor@metronome.news)',
			categories: [article.data.category, ...(article.data.tags || [])],
			link: `/article/${article.id}/`,
			...(article.data.image && {
				enclosure: {
					url: new URL(article.data.image, context.site).href,
					length: 0,
					type: 'image/jpeg'
				}
			}),
		})),
		customData: `
			<language>en-us</language>
			<copyright>© 2026 Metronome News. All rights reserved.</copyright>
			<managingEditor>contact@metronome.news (raptor)</managingEditor>
			<webMaster>contact@metronome.news (raptor)</webMaster>
			<ttl>60</ttl>
		`,
	});
}