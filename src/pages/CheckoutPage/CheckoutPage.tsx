import ApplePayButton from '../../components/ApplePayButton/ApplePayButton';
import BackButton from '../../components/BackButton/BackButton';
import Divider from '../../components/Divider/Divider';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.payment_info}>
        <div className={styles.desktop_nav}>
          <div className={styles.desktop_nav_back}>
            <BackButton />
          </div>

          <p className={styles.desktop_nav_title}>
            Checkout
          </p>
        </div>

        <div className={styles.subscription_info}>
          <p className={styles.main_text}>5 days free</p>
          <p className={styles.subtext}>then 299.99 UAH per 14 days</p>
        </div>
        
        <div className={styles.apple_pay}>
          <ApplePayButton />
        </div>

        <Divider color="#E4E6EC" text="or pay with card" mb="16px" />

        <div className={styles.payment_form}>
          <PaymentForm />
        </div>

        <div className={styles.payment_warning}>
          You'll have your <span>Plan Pro during 1 year</span>. After this period
          of time, your plan will be <span>automatically renewed</span> with its
          original price without any discounts applied.
        </div>
      </div>

      <div className={styles.order_info}>
        <OrderInfo />
      </div>
    </div>
  );
};

export default CheckoutPage;