import React, { Component } from 'react';
import { formatPrice } from '../utils/utils';
import { BlankButton } from './Buttons.js';

const cartRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.8em',
  flexShrink: '0',
  padding: '0.5em'
};

export default class CartItem extends Component {
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
    let { item, quantity, price } = this.props;
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
                <BlankButton clickAction={() => null}>
                  <span
                    style={{ color: '#712F79' }}
                    className="fa fa-cart-arrow-down"
                  />
                </BlankButton>
                <span style={{ padding: '0 0.5rem', fontSize: '1rem' }}>
                  {quantity}
                </span>
                <BlankButton clickAction={() => null}>
                  <span
                    style={{ color: '#712F79' }}
                    className="fa fa-cart-plus"
                  />
                </BlankButton>
              </span>
              <span>
                <BlankButton clickAction={() => console.log('click!')}>
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
