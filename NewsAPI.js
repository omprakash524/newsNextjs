import axios from "axios";

const API_KEY = "YOUR_API_KEY"; //Replace with your API Key
const API_URL = "https://newsapi.org/v2/";

export const getTopHeadlines = async (category = "") => {
  try {
    const response = await axios.get(
      `${API_URL}top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}everything?id=${id}&apiKey=${API_KEY}`);
    return response.data.articles[0];
  } catch (error) {
    console.error(error);
  }
};

export const searchArticles = async (query) => {
  try {
    const response = await axios.get(`${API_URL}everything?q=${query}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
};
