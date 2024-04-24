import React, { Component } from 'react';
import styles from './Product.module.scss';

class Product extends Component {
  render() {
    const { name, description, price } = this.props;
    return (
      <article className={styles.product}>
        <h2 className={styles.product__name}>{name}</h2>
        <p className={styles.product__description}>{description}</p>
        <p className={styles.product__price}>{price}</p>
      </article>
    );
  }
}

export default Product;
