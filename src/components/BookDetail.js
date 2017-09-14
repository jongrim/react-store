import React, { Component } from 'react';
import { Sidebar, SidebarLink } from './Sidebar.js';
import API from '../utils/api.js';

const containerStyle = {
  height: '100%',
  width: '100%',
  display: 'flex'
};

const detailPaneStyle = {
  padding: '0 1em',
  overflow: 'auto'
};

export default class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    API.getOneBook(id).then(result => {
      API.getGoogleBookJSON(result.title).then(response => {
        this.setState({
          dataObj: response.items[0]
        });
      });
    });
  }

  render() {
    const book = this.state.dataObj;
    return (
      <div style={containerStyle}>
        <Sidebar>
          <SidebarLink to="/shop/books">Books</SidebarLink>
          <SidebarLink to="/shop/movies">Movies</SidebarLink>
          <SidebarLink to="/shop/games">Games</SidebarLink>
        </Sidebar>
        {book ? (
          <div style={detailPaneStyle}>
            <h3>{book.volumeInfo.title}</h3>
            {book.volumeInfo.authors.map(author => <p>{author}</p>)}
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt="cover thumbnail"
            />
            <h4>Description</h4>
            <p>{book.volumeInfo.description}</p>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}
