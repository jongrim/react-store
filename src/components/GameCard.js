import React, { Component } from 'react';
import API from '../utils/api.js';
import ProductCard from './ProductCard.js';
import PropTypes from 'prop-types';

export default class GameCard extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null,
      dataObj: null
    };
  }

  componentDidMount() {
    API.getGame(this.props.id).then(result => {
      this.setState({
        imgUrl: result.imageUrl,
        dataObj: result
      });
    });
  }

  render() {
    return (
      <ProductCard
        {...this.props}
        imgUrl={this.state.imgUrl}
        category="games"
      />
    );
  }
}
