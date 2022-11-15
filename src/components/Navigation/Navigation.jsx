import React from "react";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>Сообщения</div>
            <div className={styles.item}>Новости</div>
            <div className={styles.item}>Музыка</div>
            <div className={styles.item}>Настройки</div>
        </nav>
    );
}

export default Navigation;