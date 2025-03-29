import styles from "./SuccessMessage.module.css";

const SuccessMessage = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.body} onClick={(e) => e.stopPropagation()}>
        <p className={styles.title}>Payment Successful</p>

        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#028837"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>

        <button type="button" className={styles.button} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
