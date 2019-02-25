import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={this.props.details.desc} />
        <h4 className="fish-name">
          {name} <span className="price">{formatPrice(price)}</span>
        </h4>
        <p>{desc}</p>
        <button disabled={!isAvailable}>
          {isAvailable ? 'Add To Cart' : 'Sold out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
