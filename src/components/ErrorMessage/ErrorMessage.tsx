import styles from './ErrorMessage.module.css';

export const ErrorMessage = ({ error } : {
  error?: string
}) => {
  if (!error) return null;

  return <div className={styles.container}>{error}</div>;
};

export default ErrorMessage;