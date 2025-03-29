import styles from './Footer.module.css';
import solid from '../../assets/icons/solid.svg'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>Powered by</p>
      
      <img src={solid} alt="Solid text" className={styles.solid} />
    </footer>
  );
};

export default Footer;