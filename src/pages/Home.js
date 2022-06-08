import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import velo from "../assets/img/VeloBW.jpg";
const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className="container"> {/*style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', height: 600, width: 600 }}*/}
                <h1>
                    Les Vélos !
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum minus quaerat aspernatur exercitationem, dolorem error eaque inventore aperiam accusamus veniam mollitia eligendi ipsa aut iure. Earum adipisci facere mollitia?</p>
            </div>
            <div className="imageVelo"><img src={velo} alt="Une image de velo" />        </div>
            <h1>ACCUEIL</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste, tempora dolorem inventore delectus obcaecati corporis numquam dicta quae illum error commodi. Facilis exercitationem, incidunt sed earum porro architecto ipsum.</p>
            <br />
            <h2>Deuxieme partie</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam saepe sunt, placeat impedit velit mollitia nobis neque ea sed numquam eius labore excepturi eveniet nihil veniam accusantium quaerat! Delectus.</p>
            <br />
        </div>

    );
};

export default Home;