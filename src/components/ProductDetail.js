import React, { Component } from 'react';
import { Sidebar, SidebarLink } from './Sidebar.js';

const containerStyle = {
  height: '100%',
  width: '100%',
  display: 'flex'
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
    return (
      <div style={containerStyle}>
        <Sidebar>
          <SidebarLink to="/shop/books">Books</SidebarLink>
          <SidebarLink to="/shop/movies">Movies</SidebarLink>
          <SidebarLink to="/shop/games">Games</SidebarLink>
        </Sidebar>
        {product ? <Wrapper dataObj={product} /> : <div>Loading</div>}
      </div>
    );
  }
}
