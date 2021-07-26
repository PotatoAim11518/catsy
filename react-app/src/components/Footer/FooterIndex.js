import React from 'react';
import './footer.module.css';
import { useHistory } from 'react-router-dom';

import Button from '../Button'

import styles from "./footer.module.css";

export default function Footer() {
    const history = useHistory();

    const goToGithub = () => {
        history.push('https://github.com/commanderh/catsy')
    }

    return (
        <footer>
            <div className={styles.footer_container}>
                <div className={styles.footer_text}>
                    Built by: Wilson Huang, Alex Hertel, and Huy Lam
                </div>
                <div>
                    <Button action={goToGithub} text={<i className='fab fa-github'> GitHub</i>} width={180}/>
                </div>
            </div>
        </footer>
    )
}
