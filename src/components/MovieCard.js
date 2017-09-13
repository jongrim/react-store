import React, { Component } from 'react';
import ProductCard from './ProductCard.js';
import API from '../utils/api.js';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null
    };
  }

  componentDidMount() {
    API.getMovieJSON(this.props.name).then(result => {
      this.setState({
        imgUrl: result.Poster
      });
    });
  }

  render() {
    return <ProductCard {...this.props} imgUrl={this.state.imgUrl} />;
  }
}
