import React from 'react';
import ProfileMain from '../../Components/Profile/ProfileMain';
import Topbar from '../../Components/Topbar/Topbar';
import ProfileImg from '../../Components/Profile/ProfileImg';
import Footer from '../../Components/Footer/Footer';

const ProfilePage = () => {

    return (
        <>
            <Topbar />
             <ProfileImg/>
            <ProfileMain />
            <Footer />
        </>
    )
}

export default ProfilePage;