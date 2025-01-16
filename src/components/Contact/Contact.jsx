import React from 'react'
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id = "contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src = "/assets/contact/emailIcon.png" alt = "Email icon"/>
                <a href = "mailto:sahilrvartak@gmail.com" target="_blank" rel="noopener noreferrer">sahilrvartak@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src = "/assets/contact/linkedinIcon.png" alt = "LinkedIn icon" />
                <a href = "https://www.linkedin.com/in/sahil-r-vartak/" target="_blank" rel="noopener noreferrer">linkedin.com/sahil-r-vartak</a>
            </li>

            <li className={styles.link}>
                <img src = "/assets/contact/githubIcon.png" alt = "Github icon"/>
                <a href = "https://github.com/SV-Hello" target="_blank" rel="noopener noreferrer">github.com/SV-Hello</a>
            </li>
        </ul>
    </footer>
  )
}
