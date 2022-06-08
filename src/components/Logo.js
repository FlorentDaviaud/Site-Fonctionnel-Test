import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/*Les images importees depuis la balise img sont accessibles dans public*/}
            <img src="./veloLogo.png" alt="logo velo" />
            <h3>Les vélos de Quentin</h3>
        </div>
    );
};

export default Logo;