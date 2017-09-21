import React, { Component } from 'react';
import API from '../utils/api.js';
import ProductCard from './ProductCard.js';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null,
      dataObj: null
    };
  }

  componentDidMount() {
    API.getMovieJSON(this.props.name)
      .then(result => {
        this.setState({
          imgUrl: result.Poster,
          dataObj: result
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <ProductCard
        {...this.props}
        imgUrl={this.state.imgUrl}
        category="movies"
      />
    );
  }
}
