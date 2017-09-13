const axios = require('axios');

const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001/api';

const GOOGLE_API_URL = title => {
  return `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyCZvpk9nL5gtEEa1Mg94gAxVm2Bpjb74jo`;
};

const OMDB_API_URL = title => {
  return `http://www.omdbapi.com/?apikey=40e9cece&t=${title}`;
};

function getBooks() {
  return axios.get(`${API_URL}/books`).then(result => {
    return result.data;
  });
}

function getOneBook(id) {
  return axios.get(`${API_URL}/books/${id}`).then(result => {
    return result;
  });
}

function getResource(path) {
  return axios.get(`${API_URL}${path}`).then(result => {
    return result.data;
  });
}

function getGoogleBookJSON(title) {
  return axios.get(GOOGLE_API_URL(title)).then(result => {
    return result.data;
  });
}

function getMovieJSON(title) {
  return axios.get(OMDB_API_URL(title)).then(result => {
    return result.data;
  });
}

function getGame(id) {
  return axios.get(`${API_URL}/games/${id}`).then(result => {
    return result.data;
  });
}

const API = {
  getAllBooks: getBooks,
  getOneBook: getOneBook,
  getResource: getResource,
  getGoogleBookJSON,
  getMovieJSON,
  getGame
};

export default API;
