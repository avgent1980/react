import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './component.module.css';
import Logout from '../images/ant-design_logout-outlined.png';
import Email from '../images/carbon_email.png';
import Message from '../images/bx_bx-message.png';

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);
  console.log(me);
  return (
    <div>
      <div className={styles.cardbox}>
        <div className={styles.cardIconBox}>
          <div className={styles.iconBox}>
            <p className={styles.iconText}>메일 00</p>
            <img src={Email} className={styles.iconimg} />
          </div>
          <div className={styles.iconBox}>
            <p className={styles.iconText}>쪽지 00</p>
            <img src={Message} className={styles.iconimg} />
          </div>
          <div className={styles.iconBox}>
            <p className={styles.iconText}>로그아웃</p>
            <img src={Logout} className={styles.iconimg} />
          </div>
        </div>
        <div className={styles.lineVector}></div>
        <div className={styles.cardTextBox}>
          <p className={styles.cardTextEmail}>
            rainbows99@daum.net
          </p>
          <p className={styles.cardTextNickName}>
            Nemesis
          </p>
          <p className={styles.cardTextDescription}>
            Porttitor lectus sem sed turpis proin commodo. In luctus sagittis, non ligula sollicitudin quis vulputate.  
          </p>
        </div>
        <div className={styles.cardImageBox}>
          <img className={styles.cardImage} src="http://imagescdn.gettyimagesbank.com/500/201711/jv11023038.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
