import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { CountdownProvider } from "../contexts/CountdownContext";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import Profile from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

interface HomeProps {
    level: number;
    currentExperience: number;
    challengeCompleted: number;
}

export default function Home(props: HomeProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengeCompleted={props.challengeCompleted}
        >
            <div className={styles.container}>
                <Head>
                    <title>Início | move.it</title>
                </Head>
                <ExperienceBar />
                <CountdownProvider>
                    <section>
                        <div>
                            <Profile />
                            <CompletedChallenges />
                            <Countdown />
                        </div>
                        <div>
                            <ChallengeBox />
                        </div>
                    </section>
                </CountdownProvider>
            </div>
        </ChallengesProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengeCompleted: Number(challengeCompleted),
        },
    };
};
