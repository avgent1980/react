import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from './component.module.css';

const signUpForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  });
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  });
  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  });
  const onChangePhoneNumber = useCallback((e) => {
    setPhoneNumber(e.target.value);
  });
  const onChangeMail = useCallback((e) => {
    setEmail(e.target.value);
  })

  const onSubmit = () => {
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {

      }
    })
    console.log("제출합니다.")
  }

  return (
    <div>
      <div className={styles.aa}>
        <p className={styles.bb}>React CMS</p>
      </div>
      <div className={styles.signUpForm}>
        <div className={styles.signUpIdBox}>
          <input type="text" className={styles.signUpIdBoxInput} onChange={onChangeId}></input>
          <div className={styles.signUpIdTextBox}>
            <p className={styles.signUpIdText}>아이디</p>
          </div>
        </div>
        <div className={styles.signUpIdBox}>
          <input type="text" className={styles.signUpIdBoxInput} onChange={onChangePassword}></input>
          <div className={styles.signUpIdTextBox}>
            <p className={styles.signUpIdText}>비밀번호</p>
          </div>
        </div>
        <div className={styles.signUpIdBox}>
          <input type="text" className={styles.signUpIdBoxInput}></input>
          <div className={styles.signUpIdTextBox}>
            <p className={styles.signUpIdText}>비밀번호 재확인</p>
          </div>
        </div>
        <div className={styles.signUpIdBox}>
          <input type="text" className={styles.signUpIdBoxInput} onChange={onChangeName}></input>
          <div className={styles.signUpIdTextBox}>
            <p className={styles.signUpIdText}>이름</p>
          </div>
        </div>
        <div className={styles.signUpIdBox}>
          <input type="text" className={styles.signUpIdBoxInput}></input>
          <div className={styles.signUpIdTextBox}>
            <p className={styles.signUpIdText}>생년월일</p>
          </div>
        </div>
        <div className={styles.signUpIdBox}>
          <input type="text" className={styles.signUpIdBoxInput}></input>
          <div className={styles.signUpIdTextBox}>
            <p className={styles.signUpIdText}>성별</p>
          </div>
        </div>
        <div className={styles.signUpIdBox}>
          <input type="text" className={styles.signUpIdBoxInput} onChange={onChangePhoneNumber}></input>
          <div className={styles.signUpIdTextBox}>
            <p className={styles.signUpIdText}>휴대전화</p>
          </div>
        </div>
        <div className={styles.signUpIdBox}>
          <input type="text" className={styles.signUpIdBoxInput} onChange={onChangeMail}></input>
          <div className={styles.signUpIdTextBox}>
            <p className={styles.signUpIdText}>본인 확인용 이메일</p>
          </div>
        </div>
        <button name="memberSignUp" className={styles.memberSignUp} onClick={onSubmit}>로그인</button>
      </div>
    </div>
  );
};

export default signUpForm