import React, { Component } from 'react';
import { BlankButton } from './Buttons.js';
import { formatPrice } from '../utils/utils';
import PropTypes from 'prop-types';

const cartRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.8em',
  flexShrink: '0',
  padding: '0.5em'
};

export default class CartItem extends Component {
  static propTypes = {
    item: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.setHovered = this.setHovered.bind(this);
  }

  setHovered() {
    this.setState(prevState => {
      return {
        hovered: !prevState.hovered
      };
    });
  }

  render() {
    let {
      item,
      quantity,
      price,
      product,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart
    } = this.props;
    return (
      <div onMouseEnter={this.setHovered} onMouseLeave={this.setHovered}>
        {this.state.hovered ? (
          <div>
            <div style={cartRowStyle}>
              <span>
                {item} {quantity > 1 ? `(x${quantity})` : null}
              </span>
              <span>{formatPrice(price)}</span>
            </div>
            <div style={cartRowStyle}>
              <span>
                <BlankButton clickAction={() => decreaseQuantity(product)}>
                  <span
                    style={{ color: '#712F79' }}
                    className="fa fa-cart-arrow-down"
                  />
                </BlankButton>
                <span style={{ padding: '0 0.5rem', fontSize: '1rem' }}>
                  {quantity}
                </span>
                <BlankButton clickAction={() => increaseQuantity(product)}>
                  <span
                    style={{ color: '#712F79' }}
                    className="fa fa-cart-plus"
                  />
                </BlankButton>
              </span>
              <span>
                <BlankButton clickAction={() => removeFromCart(product)}>
                  <span style={{ color: '#F15025' }} className="fa fa-ban" />
                </BlankButton>
              </span>
            </div>
          </div>
        ) : (
          <div style={cartRowStyle}>
            <span>
              {item} {quantity > 1 ? `(x${quantity})` : null}
            </span>
            <span>{formatPrice(price)}</span>
          </div>
        )}
      </div>
    );
  }
}
