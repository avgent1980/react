import React from 'react';
import LoginForm from '../components/loginForm';
import { useSelector } from 'react-redux';
import UserProfile from '../components/UserProfile';
import AppLayout from '../components/AppLayout';

const Home = () => {
  const { me } = useSelector((state) => state.user)
  return (
    <AppLayout>
      {me ? <UserProfile /> : <LoginForm />}
    </AppLayout>
  );
}

export default Home;