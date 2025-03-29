import clsx from "clsx";
import Loader from "./Loader/Loader";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ loading } : {
  loading: boolean
}) => {
  return (
    <button
      type="submit"
      className={styles.container}
      disabled={loading}
    >
      <p className={clsx(styles.text, loading && styles.fade_out)}>Pay 299.99 UAH</p>

      {loading && (
        <div
          className={clsx(
            styles.processing_container,
            styles.text,
            loading && styles.fade_in
          )}
        >
          <Loader />
          <p>Processing payment</p>
        </div>
      )}
    </button>
  );
};

export default SubmitButton;
