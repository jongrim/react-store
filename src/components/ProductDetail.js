import React, { Component } from 'react';
const Spinner = require('react-spinkit');

const containerStyle = {
  height: '100%',
  width: '100%',
  padding: '0 1em',
  flexGrow: '1'
};

const centered = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: '1'
};

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const apiFn = this.props.productAPI;
    apiFn(id).then(result => {
      console.log(result);
      this.setState({
        dataObj: result
      });
    });
  }

  render() {
    const product = this.state.dataObj;
    const Wrapper = this.props.component;
    return product ? (
      <div style={containerStyle}>
        <Wrapper dataObj={product} />
      </div>
    ) : (
      <div style={centered}>
        <Spinner name="line-scale" color="#712F79" fadeIn="quarter" />
      </div>
    );
  }
}
