import React from 'react';
import Head from 'next/head'
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/loginForm';
import signUpForm from '../components/signUpForm';

const Home = () => {
    return (
        <AppLayout>
            <Head>
                <title>React CMS</title>
            </Head>
            <LoginForm></LoginForm>
        </AppLayout>
    )
}

export default Home;