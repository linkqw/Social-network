import React from 'react';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = () => {
    return (
        <div className={styles.content}>
            <div className={styles.profile__img}>
                <img src="https://www.ejin.ru/wp-content/uploads/2017/09/17-524.jpg" alt="img is not define"/>
            </div>
            <div className={styles.avatar}>
                <img src="https://zolya.ru/wp-content/uploads/e/9/7/e974fed6921b0badbfdf506767f128fc.png" alt="img is not define"/>
            </div>
            <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat temporibus distinctio aliquid aspernatur!</p>
            </div>
            <Posts />
        </div>
    );
}

export default Profile;