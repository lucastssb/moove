import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img
                src="https://avatars.githubusercontent.com/u/37252638?v=4"
                alt="Lucas Barbosa"
            />
            <div>
                <strong>Lucas Barbosa</strong>
                <p>
                    <img src="/icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}
