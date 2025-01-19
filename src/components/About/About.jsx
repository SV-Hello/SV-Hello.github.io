import React from "react";
import styles from "./About.module.css";

import aboutImage from '../../../assets/about/graduationImage.jpg'
import cursorIcon from '../../../assets/about/cursorIcon.png'
import serverIcon from '../../../assets/about/serverIcon.png'
import uiIcon from '../../../assets/about/uiIcon.png'


export const About = () => {
    return <section className={styles.container} id = "about">
        <h2 className={styles.title}>ABOUT</h2>

        <div className={styles.aboutBlock}>
            <img className={styles.aboutImage} src = {aboutImage} alt = "Me sitting with a laptop"/>

            <ul className={styles.textBlock}>
                <li className={styles.aboutSection}>
                    <img src = {cursorIcon}  className={styles.textImage}/>
                    <div className={styles.aboutText}>
                        <h4>Frontend Developer</h4>
                        <p>I'm a front-end developer with experience in building responsive and optimized sites.</p>
                    </div>
                </li>

                <li className={styles.aboutSection}>
                    <img src = {serverIcon} className={styles.textImage}/>
                    <div className={styles.aboutText}>
                        <h4>Backend Developer</h4>
                        <p>I have experience developing fast and optimized back-end systems and APIs.</p>
                    </div>
                </li>

                <li className={styles.aboutSection}>
                    <img src = {uiIcon}  className={styles.textImage}/>
                    <div className={styles.aboutText}>
                        <h4>UI Designer</h4>
                        <p>I have designed multiple landing pages and have created design systems as well.</p>
                    </div>
                </li>
            </ul>    
        </div>
        
    </section>
}

