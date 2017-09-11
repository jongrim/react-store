const axios = require('axios');

const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001/api';

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

const API = {
  getAllBooks: getBooks,
  getOneBook: getOneBook,
  getResource: getResource
};

export default API;
