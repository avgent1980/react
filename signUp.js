import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import SignUpForm from '../components/signUpForm';

const signUp = () => {
  return (
    <AppLayout>
      <Head>
          <title>React CMS</title>
      </Head>
      <SignUpForm></SignUpForm>
    </AppLayout>
  )
}

export default signUp;