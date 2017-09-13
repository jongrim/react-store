import React, { Component } from 'react';
import ProductCard from './ProductCard.js';
import API from '../utils/api.js';

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null
    };
  }

  componentDidMount() {
    API.getGame(this.props.id).then(result => {
      this.setState({
        imgUrl: result.imageUrl
      });
    });
  }

  render() {
    return <ProductCard {...this.props} imgUrl={this.state.imgUrl} />;
  }
}
