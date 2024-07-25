import { faker } from "@faker-js/faker/locale/ru";

export interface NewsArticle {
	articleDate: string;
	articleHeader: string;
	articleBodyText: string;
	articleHeaderImg: string;
	articleOtherImages: string[];
}

function createRandomNewsArticle(): NewsArticle {
	const startDate = new Date(2023, 0, 1);
	const endDate = new Date(2025, 11, 31);
	const randomDate = new Date(
		startDate.getTime() +
			Math.random() * (endDate.getTime() - startDate.getTime())
	);
	const articleDate = randomDate.toISOString().split("T")[0];
	const articleHeader = faker.lorem.words(Math.floor(Math.random() * 4) + 2);
	const articleBodyText = faker.lorem.words(
		Math.floor(Math.random() * 76) + 25
	);
	const generateImage = (category: string): string => {
		return faker.image.urlLoremFlickr({
			width: Math.floor(Math.random() * 1000) + 500,
			height: Math.floor(Math.random() * 1000) + 500,
			category: category,
		});
	};
	const articleHeaderImg = generateImage("people");
	const articleOtherImages = Array.from(
		{ length: Math.floor(Math.random() * 4) + 2 },
		() => generateImage("people")
	);

	return {
		articleDate,
		articleHeader,
		articleBodyText,
		articleHeaderImg,
		articleOtherImages,
	};
}

export function generateNumberOfArticles(
	min: number,
	max: number
): NewsArticle[] {
	const articleCount = Math.floor(Math.random() * (max - min + 1)) + min;
	const articles = Array.from({ length: articleCount }, () =>
		createRandomNewsArticle()
	);
	return articles;
}
