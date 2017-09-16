const axios = require('axios');

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://radiant-wave-21374.herokuapp.com/api'
    : 'http://localhost:3001/api';

const GOOGLE_API_URL = title => {
  return `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyCZvpk9nL5gtEEa1Mg94gAxVm2Bpjb74jo`;
};

const OMDB_API_URL = title => {
  return `https://www.omdbapi.com/?apikey=40e9cece&t=${title}`;
};

function getBooks() {
  return axios.get(`${API_URL}/books`).then(result => {
    return result.data;
  });
}

function getOneBook(id) {
  return axios.get(`${API_URL}/books/${id}`).then(result => {
    return getGoogleBookJSON(result.data.title).then(response => {
      return response.items[0];
    });
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

function getOneMovie(id) {
  return getResource(`/movies/${id}`).then(result => {
    return getMovieJSON(result.title).then(response => {
      return response;
    });
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
  getGame,
  getOneMovie
};

export default API;
