import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { usePayment } from "../../hooks/usePayment";
import cvcInfo from "../../assets/icons/cvc_info.svg";
import InputMask from "@mona-health/react-input-mask";
import SubmitButton from "../SubmitButton/SubmitButton";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import styles from "./PaymentForm.module.css";
import * as yup from "yup";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { checkExpirationDate } from "../../utils/checkExpirationDate";

const schema = yup.object({
  cardNumber: yup
    .string()
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Invalid card number format")
    .required("Card number is required"),
  expiryDate: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY")
    .test(
      "is-future",
      "Expiration date must be in the future",
      checkExpirationDate
    )
    .required("Exp. date is required"),
  cvv: yup
    .string()
    .matches(/^\d{3}$/, "CVC must be 3 digits")
    .required("CVC is required"),
});

const PaymentForm = () => {
  const { pay, success, error, clear } = usePayment();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    await pay();
  };

  const handleFormReset = () => {
    reset(); // reset form values
    clear(); // reset payment status
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.card_info}>
        <div className={styles.input_container}>
          <label htmlFor="cardNumber" className={styles.input_label}>
            Card Number
          </label>
          <InputMask
            {...register("cardNumber")}
            mask="9999 9999 9999 9999"
            id="cardNumber"
            placeholder="1234 1234 1234 1234"
            className={styles.input}
            inputMode="numeric"
          />
          <ErrorMessage error={errors.cardNumber?.message} />
        </div>

        <div className={styles.input_container}>
          <label htmlFor="expiryDate" className={styles.input_label}>
            Expiration Date
          </label>
          <InputMask
            {...register("expiryDate")}
            mask="99/99"
            placeholder="MM/YY"
            id="expiryDate"
            inputMode="numeric"
          />
          <ErrorMessage error={errors.expiryDate?.message} />
        </div>

        <div className={styles.input_container}>
          <label htmlFor="cvv" className={styles.input_label}>
            CVC
          </label>
          <div className={styles.cvv_input_container}>
            <InputMask
              {...register("cvv")}
              placeholder="•••"
              id="cvv"
              mask="9999"
              inputMode="numeric"
              type="password"
            />

            <img src={cvcInfo} alt="info icon" className={styles.cvc_icon} />
          </div>

          <ErrorMessage error={errors.cvv?.message} />
        </div>
      </div>

      <SubmitButton loading={isSubmitting} />
      <ErrorMessage error={error} />

      {success && <SuccessMessage onClose={handleFormReset} />}
    </form>
  );
};

export default PaymentForm;
