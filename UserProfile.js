import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './component.module.css'

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);
  console.log(me);
  return (
    <div>
      <img className={styles.iconimg} src={me.src} alt="이미지"></img>
      <p className={styles.icontext}>{me.name}님 반갑습니다</p>
    </div>
  );
}

export default UserProfile;