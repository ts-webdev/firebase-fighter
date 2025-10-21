import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

const Profile = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar></Navbar>
            <Main icon={'👨🏻‍💼'} pageName={'Profile'}></Main>
            <Footer></Footer>
        </div>
    );
};

export default Profile;