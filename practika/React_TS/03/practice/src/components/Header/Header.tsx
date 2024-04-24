import { ThemeSwitcher } from 'components/ThemeSwitcher';
import styles from './Header.module.scss';


export const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <ThemeSwitcher />
    </div>
  )
};