import styles from './BackButton.module.css';
import backIcon from '../../assets/icons/back_icon.svg'

const BackButton = () => {
  return (
    <button className={styles.container}>
      <img src={backIcon} alt="back button icon" className={styles.icon} />
    </button>
  );
};

export default BackButton;