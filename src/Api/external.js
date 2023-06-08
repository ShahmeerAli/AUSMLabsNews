import axios from "axios";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const NEWS_API_ENDPOINT = `https://newsapi.org/v2/everything?q=entertainment&sortBy=publishedAt&language=en&apiKey=${NEWS_API_KEY}`;

export const getNews = async () => {
  let response;

  try {
    response = await axios.get(NEWS_API_ENDPOINT);
    response = response.data.articles.slice(0, 20);
  } catch (error) {
    console.log(error);
  }

  return response;
};
