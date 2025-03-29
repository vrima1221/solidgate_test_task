import clsx from "clsx";
import { limitText } from "../../utils/limitText";
import Divider from "../Divider/Divider";
import styles from "./OrderInfo.module.css";
import { DESCRIPTION_TEXT_450, INFO_TEXT_120 } from "../../utils/constants";

const OrderInfo = () => {
  return (
    <div className={styles.container}>
      <p className={clsx(styles.order_info, styles.truncate)}>{limitText(INFO_TEXT_120, 100)}</p>
      <p className={styles.order_description}>{limitText(DESCRIPTION_TEXT_450, 400)}</p>
      <Divider color="#E0E2EA" />

      <div className={styles.goods}>
        <p className={styles.goods_name}>
          Lamel Professional Smart Skin Compact Powder
        </p>

        <p className={styles.goods_description}>
          Пудра для лица
        </p>
      </div>

      <Divider color="#E0E2EA" />

      <p className={styles.price}>
        <span className={styles.price_total}>{"Total "}</span>
        <span className={styles.price_amount}>299.99 UAH</span>
        
        <span className={styles.price_slash}>{" /"}</span>
        <span className={styles.price_month}>{" month"}</span>
      </p>
    </div>
  );
};

export default OrderInfo;
