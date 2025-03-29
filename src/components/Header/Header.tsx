import BackButton from '../BackButton/BackButton';
import LocalizationSwitch from '../LocalizationSwitch/LocalizationSwitch';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.back_button}>
        <BackButton />
      </div>

      <p className={styles.title}>Checkout</p>

      <LocalizationSwitch />
    </header>
  );
};

export default Header;