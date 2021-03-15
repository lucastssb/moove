import React from "react";
import Link from "next/link";

import styles from "../styles/pages/Login.module.css";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <main>
        <div className={styles.loginContent}>
          <img src="logo.svg" alt="move!"/>
          <div className={styles.welcome}>
            <h1>Welcome</h1>
            <div className={styles.github}>
              <img src="github.svg" alt="github" />
              <span>Sign in with your GitHub account</span>
            </div>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your username"
              />
              <Link passHref href="/">
                <a>
                  <img src="./icons/arrow-right.svg" alt="login" />
                </a>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
