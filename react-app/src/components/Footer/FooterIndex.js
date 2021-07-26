import React from 'react';
import './footer.module.css';
import { Link } from 'react-router';
import styles from "./footer.module.css";

export default function Footer() {

    return (
        <footer>
            <div className={styles.footer_container}>
                <div className={styles.footer_text}>
                    Built by: Wilson Huang, Alex Hertel, and Huy Lam
                </div>
                <div className={styles.footer_element}>
                    <a
                        className='footerIcon'
                        href='https://github.com/commanderh/catsy'>
                        <i className='fab fa-github'></i> GitHub</a>
                </div>
            </div>
        </footer>
    )
}
