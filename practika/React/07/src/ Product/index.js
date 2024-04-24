import React, { Component } from "react";
// import classNames from "classnames";
import styles from './product.module.css'
import PropTypes from 'prop-types';

class Product extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {name,price,promotionalPrice,image,quantity} = this.props.item
    return (
      <section className={styles.product}>
        <div className={styles.cardWrapper}>
          <div className={styles.img}>
            <img src={image} />
          </div>
          <span>{name}</span>
          <span>В наличие {quantity} - шт.</span>
          <div className={styles.prices}>
            <s>{price}$</s>
            <span>{promotionalPrice}$</span>
          </div>
        </div>
      </section>
    )
  }
}

Product.propTypes = {
  item:PropTypes.shape({
    name:PropTypes.string,
    price:PropTypes.number,
    promotionalPrice:PropTypes.number,
    image:PropTypes.string,
    quantity: PropTypes.number,
  })
}

export default Product;
