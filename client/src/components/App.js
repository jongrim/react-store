import React, { Component } from 'react';
import '../css/App.css';
import OrderForm from './OrderForm';
import ProductTable from './ProductTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount() {
    fetch('/customer')
      .then(res => {
        return res.json();
      })
      .then(products => {
        this.setState({ products });
      });
  }

  handlePurchase(event, product, quantity) {
    event.preventDefault();
    event.stopPropogation();
    fetch('/customer', { method: 'POST', body: JSON.stringify({ product, quantity }) })
      .then(res => res.json())
      .then(data => {
        this.setState({ message: data.message });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.message
          ? <div>
              <h1>
                {this.state.message}
              </h1>
            </div>
          : <div />}
        <ProductTable products={this.state.products} />
        <OrderForm product={this.state.products} fnPurchase={this.handlePurchase} />
      </div>
    );
  }
}

export default App;
