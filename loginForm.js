import styles from './component.module.css'
import React, { useState, useCallback } from 'react';

const loginForm = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const path = "http://localhost:3060"
    const idOnChange = useCallback((e) => {
        setId(e.target.value);
        console.log("id를 입력중입니다.")
    },[])
    const passwordOnChange = useCallback((e) => {
        setPassword(e.target.value);
        console.log("password를 입력중입니다.")
    },[])
    const onChangeEnd = useCallback((e) => {
        setId("");
        setPassword("");
    },[])
    const onChange = useCallback(() => {
        console.log("더미입니다.")
    })
    return (
        <div>
            <div className={styles.a}>
                <p className={styles.b}>React CMS</p>
            </div>
            <div className={styles.loginForm}>
                <input type="text" name="id" placeholder="아이디" className={styles.idInput} onChange={idOnChange}></input>
                <input type="text" name="password" placeholder="패스워드" className={styles.idInput2} onChange={passwordOnChange}></input>
                <button name="logInBtn" className={styles.idInput3} onClick={onChangeEnd}>로그인</button>
                <button name="naverBtn" className={styles.idInput4} onClick={onChange}>네이버 계정 로그인</button>
                <button name="daumBtn" className={styles.idInput5} onClick={onChange}>다음 계정 로그인</button>
                <div className={styles.line}></div>
                <div className={styles.ltr}>
                    <a href={path + "/signUp"} className={styles.noUnderLine}><p name="signUp" className={styles.signUp} onClick={onChange}>회원가입</p></a>
                    <a href={path} className={styles.noUnderLine}><p name="searchPassword" className={styles.searchPassword} onClick={onChange}>비밀번호 찾기</p></a>
                </div>
            </div>
        </div>
    )
}

export default loginForm;
