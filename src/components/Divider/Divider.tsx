import styles from './Divider.module.css';

const Divider = ({ text, color, mb } : {
  color: string
  text?: string
  mb?: string
}) => {
  return (
    <div className={styles.container} style={{marginBottom: mb}}>
      <div className={styles.line} style={{backgroundColor: color}}/>
      {!!text && (
        <>
          <p className={styles.text}>{text}</p>
          
          <div className={styles.line} style={{backgroundColor: color}}/>
        </>
      )}

    </div>
  );
};

export default Divider;