import React from 'react';
import styles from './component.module.css'

const signUpForm = () => {
    const onSubmit = () => {
        console.log("제출합니다.")
    }
    return (
        <div>
            <div className={styles.aa}>
                <p className={styles.bb}>React CMS</p>
            </div>
            <div className={styles.signUpForm}>
                <div className={styles.signUpIdBox}>
                    <input type="text" className={styles.signUpIdBoxInput}></input>
                    <div className={styles.signUpIdTextBox}>
                        <p className={styles.signUpIdText}>아이디</p>
                    </div>
                </div>
                <div className={styles.signUpIdBox}>
                    <input type="text" className={styles.signUpIdBoxInput}></input>
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
                    <input type="text" className={styles.signUpIdBoxInput}></input>
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
                    <input type="text" className={styles.signUpIdBoxInput}></input>
                    <div className={styles.signUpIdTextBox}>
                        <p className={styles.signUpIdText}>휴대전화</p>
                    </div>
                </div>
                <div className={styles.signUpIdBox}>
                    <input type="text" className={styles.signUpIdBoxInput}></input>
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