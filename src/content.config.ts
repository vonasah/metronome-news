import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Список разрешённых категорий — совпадает со структурой URL (/bitcoin, /ethereum...)
const CATEGORIES = [
	'bitcoin',
	'ethereum',
	'altcoins',
	'defi',
	'nft',
	'regulation',
	'market-analysis',
	'web3',
] as const;

const articles = defineCollection({
	// Источник: все .md файлы в src/content/articles/
	loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
	schema: z.object({
		// Обязательные поля
		title: z.string().min(10).max(120),
		description: z.string().min(20).max(200),
		publishDate: z.coerce.date(),
		author: z.string().default('raptor'),
		category: z.enum(CATEGORIES),

		// Опциональные поля
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { articles };

// Экспортируем список категорий — пригодится при построении страниц категорий
export { CATEGORIES };