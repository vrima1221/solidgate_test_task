import styles from './ApplePayButton.module.css';
import applePayLogo from '../../assets/icons/apple_pay_logo.png'

const ApplePayButton = () => {
  return (
    <button className={styles.container} type='button'>
      <img src={applePayLogo} alt="apple pay logo" className={styles.logo} />
    </button>
  );
};

export default ApplePayButton;