import React from "react";
import clsx from "clsx";

import { AccountItem } from "@components/accounts";

import image from "@images/robot.svg";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <section className={styles.mainBlock}>
        <div className="container">
          <div className={styles.mainBlock__body}>
            <div className={styles.mainBlock__content}>
              <h1 className={styles.mainBlock__title}>
                <span>Магазин</span> трастовых аккаунтов Facebook <span>для запуска рекламы</span>
              </h1>
              <ul className={styles.mainBlock__list}>
                <li>
                  <p className={styles.mainBlock__text}>
                    <span>От 60 ₽</span> за качественные аккаунты для отлива рекламы
                  </p>
                </li>
                <li>
                  <p className={styles.mainBlock__text}>
                    Заботливая <span>техподдержка</span> для клиентов
                  </p>
                </li>
                <li>
                  <p className={styles.mainBlock__text}>
                    <span>100%</span> гарантия замены аккаунтов
                  </p>
                </li>
              </ul>
              <button type="button" className="button">Хочу аккаунты!</button>
            </div>
            <div className={styles.mainBlock__media}>
              <div className={styles.mainBlock__image}>
                <img src={image} alt="Картинка робота" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.accounts}>
        <div className="container">
          <div className={clsx(styles.accounts__header, "section-header")}>
            <h2 className="section-header__title">Витрина аккаунтов</h2>
            <h4 className="section-header__description">Выберите нужный товар и купите его в один клик или через корзину</h4>
          </div>
          <div className={styles.accounts__content}>
            <div className={styles.accounts__body}>
              <AccountItem classes={styles.accounts__item} />
              <AccountItem classes={styles.accounts__item} />
              <AccountItem classes={styles.accounts__item} />
              <AccountItem classes={styles.accounts__item} />
              <AccountItem classes={styles.accounts__item} />
              <AccountItem classes={styles.accounts__item} />
              <AccountItem classes={styles.accounts__item} />
              <AccountItem classes={styles.accounts__item} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;