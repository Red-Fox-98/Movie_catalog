import { FC } from "react";
import Styles from "./Header.module.scss";
import Logo from "../../../shared/uikit/icons/Logo";
import Search from "../../../shared/uikit/icons/Search";
import Button from "../../../shared/uikit/Button/Button";
import Auth from "src/shared/uikit/icons/Auth";
import Bell from "src/shared/uikit/icons/Bell";
import {useRouter} from "next/router";

const Header: FC = () => {
  const router = useRouter();
  return (
    <div className={Styles.header}>
      <a href={`${router.basePath}/`} className={Styles.logo}>
        <Logo />
      </a>

      <div className={Styles.headerRight}>
        <div className={Styles.searchForm}>
          <input className={Styles.input} />
          <button className={Styles.searchButton}>
            <Search />
          </button>
        </div>
        <div className={Styles.subscriptionButton}>
          <Button value={"7 дней за 0 ₽"} variant={"primary"} size={"s"} />
        </div>
        <button className={Styles.promoCodeButton}>
          {"Промокод"}
          <Auth />
        </button>
        <button className={Styles.authButton}>
          {"Войти"}
          <Bell />
        </button>
      </div>
    </div>
  );
};

export default Header;
