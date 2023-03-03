const BASE_URL = 'https://newsapi.org/v2/'
const API_KEY = 'b642594c-5199-40ee-abfa-56a0af93c860'

export const getNews = (searchText, page) => {
	return fetch(`${BASE_URL}everything?q=${searchText}&page=${page}`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
}