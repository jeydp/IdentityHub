import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import { HeaderNavigation } from "./utils/navigation";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.container}>
        <Link href={"./"} className={styles.headerLogo}>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5 2.66602H4.5V11.5549V20.4438H16.5V29.3327H28.5V20.4438V11.5549H16.5V2.66602Z"
              fill="url(#paint0_linear_0_83)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_83"
                x1="16.5"
                y1="2.66602"
                x2="16.5"
                y2="29.3327"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B67EFD" />
                <stop offset="0.97" stop-color="#FFAC8E" />
                <stop offset="1" stop-color="#CAD1E9" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <span>IdentityHub</span>
        </Link>

        <nav className={styles.siteNavigation}>
          <ul>
            {HeaderNavigation.map((e, i) => {
              return (
                <li key={i + 1}>
                  <Link href="#!">{e.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* <Button arrow href="./" text="Start free trial" variant="bordered" /> */}
        <Button arrow href="./" text="Start free trial" variant="filled" />
      </div>
    </header>
  );
};

export default Header;
