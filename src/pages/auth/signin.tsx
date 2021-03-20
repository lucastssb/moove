import React from "react";
import Link from "next/link";
import { providers, signIn, getSession } from "next-auth/client";

import styles from "../../styles/pages/SingIn.module.css";
import { GetServerSideProps } from "next";

interface GetProvidersResponse {
    [provider: string]: SessionProvider;
}

interface SessionProvider {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
}

interface SingInProps {
    providers: GetProvidersResponse;
}

export default function SignIn({ providers }: SingInProps) {
    const providersList = Object.values(providers);

    console.log(providersList);

    return (
        <div className={styles.signInContainer}>
            <main>
                <div className={styles.signInContent}>
                    <img src="/logo.svg" alt="move!" />
                    <div className={styles.welcome}>
                        <h1>Welcome</h1>
                        <div className={styles.github}>
                            <img src="/github.svg" alt="github" />
                            <a onClick={() => signIn(providersList[0].id)}>
                                Sign in with your {providersList[0].name}{" "}
                                account
                            </a>
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
                                    <img
                                        src="/icons/arrow-right.svg"
                                        alt="signIn"
                                    />
                                </a>
                            </Link>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });

    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }
    return {
        props: {
            providers: await providers(),
        },
    };
};

/* SignIn.getInitialProps = async () => {
    return {
        providers: await providers(),
    };
};
 */
