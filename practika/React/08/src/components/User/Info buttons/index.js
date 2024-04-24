import React, { Component } from 'react';
import styles from './info-button.module.scss';
import classNames from 'classnames';

class ShowInfoBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive:false,
    }
  }

  handleMouseEnter = () => {
    this.setState({
      isActive:true
    })
    this.props.renderValue(this.props.btnType);
  }
  handleMouseLeave = () => {
    this.setState({
      isActive:false
    })
  }

  render() {

    const icon = require(`${'./icons/'}${this.props.btnType}${'.png'}`)
    const iconGreen = require(`${'./icons/'}${this.props.btnType}${'-green.png'}`)

    const defaultBtnAnimationClass = this.state.isActive ? styles.default__icon__isActive : ''
    const activeBtnAnimationClass = this.state.isActive ? styles.active__icon__isActive : ''
    return (
      <div className={styles.icon__btn}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <img src={icon} className={classNames(styles.default__icon , defaultBtnAnimationClass)}/>
        <img src={iconGreen} className={classNames(styles.active__icon , activeBtnAnimationClass)} />
      </div>
    );
  }
}

export default ShowInfoBtn;
