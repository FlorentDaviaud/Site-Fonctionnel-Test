import React from 'react';
import ImageIntro from '../components/ImageIntro';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Titre from '../components/Titre';

const Velo = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Titre />
            <ImageIntro />
        </div>
    );
};

export default Velo;