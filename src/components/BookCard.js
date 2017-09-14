import React, { Component } from 'react';
import ProductCard from './ProductCard.js';
import API from '../utils/api.js';

export default class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null,
      dataObj: null
    };
  }

  componentDidMount() {
    API.getGoogleBookJSON(this.props.name).then(result => {
      const imgUrl = result.items[0].volumeInfo.imageLinks.smallThumbnail;
      this.setState({
        dataObj: result.items[0],
        imgUrl
      });
    });
  }

  render() {
    return (
      <ProductCard
        {...this.props}
        imgUrl={this.state.imgUrl}
        category="books"
      />
    );
  }
}
