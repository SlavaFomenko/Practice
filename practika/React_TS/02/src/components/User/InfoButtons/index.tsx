import React, { useState } from 'react';
import styles from './info-button.module.scss';
import classNames from 'classnames';

interface ShowInfoBtnProps {
  btnType: string;
  renderValue: (btnType: string) => void;
}

const ShowInfoBtn: React.FC<ShowInfoBtnProps> = ({ btnType, renderValue }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
    renderValue(btnType);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const icon = require(`./icons/${btnType}.png`);
  const iconGreen = require(`./icons/${btnType}-green.png`);

  const defaultBtnAnimationClass = isActive ? styles.default__icon__isActive : '';
  const activeBtnAnimationClass = isActive ? styles.active__icon__isActive : '';

  return (
    <div
      className={styles.icon__btn}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={icon} className={classNames(styles.default__icon, defaultBtnAnimationClass)} alt="Default Icon" />
      <img src={iconGreen} className={classNames(styles.active__icon, activeBtnAnimationClass)} alt="Active Icon" />
    </div>
  );
};

export default ShowInfoBtn;
