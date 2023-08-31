import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Link  to="/pokemons">
            <img src="/src/assets/pokeball.png" alt="Pokeball" />
            Pokemones
        </Link>
    );
};

export default Footer;