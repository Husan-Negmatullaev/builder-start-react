import React from "react";
import clsx from "clsx";

import flag from "@images/accounts-block/01.svg";
import styles from "./AccountItem.module.scss";

const AccountItem = ({ classes }) => {
  const [count, setCount] = React.useState(1);
  const htmlId = React.useId();

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className={clsx(classes, styles.itemAccount)}>
      <div className={styles.itemAccount__header}>
        <div className={styles.itemAccount__offer}>
          <div className={styles.itemAccount__icon}>
            <img src={flag} alt="Иконка флага страны" />
          </div>
          <p className={styles.itemAccount__text}>🇵🇱 Аккаунты ФБ ФП есть 7-10+ дней фарма + Token EAAB (есть фото) с друзьями</p>
        </div>
        <div className={clsx(styles.itemAccount__info, "_mobile-small-min-hidden")}>
          <p className={styles.itemAccount__infoText}>В наличии: <span>2967 штук</span></p>
        </div>
        <div className={styles.itemAccount__quentity}>
          <div className="quantity">
            <label htmlFor={htmlId} className="quantity__label">Сколько нужно</label>
            <div className="quantity__actions">
              <button
                type="button"
                className="quantity__button quantity__button_minus"
                onClick={decrementCount}
              >
                –
              </button>
              <div className="quantity__input">
                <input
                  autoComplete="off"
                  type="text"
                  name="form[quentity]"
                  id={htmlId}
                  value={count}
                  onChange={() => { }}
                />
                <p className="quantity__message">В наличии: 0</p>
              </div>
              <button
                type="button"
                className="quantity__button quantity__button_plus"
                onClick={incrementCount}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className={styles.itemAccount__actions}>
          <button type="button" className={clsx(styles.itemAccount__button, "button button_blue button_min")}>В корзину</button>
          <button type="button" className={clsx(styles.itemAccount__button, "button button_min")}>Купить в 1 клик</button>
        </div>
      </div>
      <div className={styles.itemAccount__footer}>
        <div className={styles.itemAccount__info}>
          <p className={styles.itemAccount__infoText}>Цена: <span>200.25 ₽ (2.60 $)</span></p>
        </div>
        <div className={styles.itemAccount__info}>
          <p className={styles.itemAccount__infoText}>В наличии: <span>2967 штук</span></p>
        </div>
      </div>
    </div>
  )
}

export default AccountItem;
