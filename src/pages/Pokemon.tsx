import { useNavigate, useParams } from "react-router-dom";
import Bulbasaur from "../assets/bulbasaur.gif";
import PokeballImg from "../assets/pokeball.png";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css";

const Pokemon = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" /> Go Back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTitle} >
                        {name?.toUpperCase()}
                    </div>
                    <div className={styles.pokemonTitle}>
                        Nr. 001
                    </div>
                    <div>
                        <img src={Bulbasaur} alt="Bulbasaur" />
                    </div>

                    <div>HP: 00</div>
                    <div>Attack: 20</div>
                    <div>Defense: 40 </div>


                </main>
            </div>

            <Footer />
        </>
    );
};

export default Pokemon;
