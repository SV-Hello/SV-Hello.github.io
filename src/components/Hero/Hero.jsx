import React from "react";
import styles from "./Hero.module.css";

import hero from '../../../assets/hero/heroImage.png';

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sahil!</h1>
            <p className={styles.description}>
                I'm full-stack developer with years of experience in Javascript and C++.
                Reach out if you'd like to hear more!
            </p>

            <a href="mailto:sahilrvartak@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>

        <img src = {hero} alt = "Hero image of me" className={styles.heroImg}/>
        <div className = {styles.topBlur} />
        <div className = {styles.bottomBlur} />
    </section>
}