"use client";
import { useRouter } from "next/navigation";
import * as styles from "./style.css";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [active, setActive] = useState("/");

  const moveToSlug = (slug: string) => {
    router.push(slug);
    setActive(slug);
  };

  return (
    <header className={styles.gnbStyles.wrapper}>
      <article className={styles.gnbStyles.base}>
        <h1 className={styles.h1} onClick={() => moveToSlug("/")}>
          메인
        </h1>
        <nav className={styles.gnbStyles.navBox}>
          <button
            className={`${styles.button} ${
              active === "/" && styles.gnbStyles.active
            }`}
            onClick={() => moveToSlug("/")}
          >
            포스트
          </button>
          <button
            className={`${styles.button} ${
              active === "/introduction" && styles.gnbStyles.active
            }`}
            onClick={() => moveToSlug("/introduction")}
          >
            소개
          </button>
        </nav>
      </article>
    </header>
  );
};

export default Header;
