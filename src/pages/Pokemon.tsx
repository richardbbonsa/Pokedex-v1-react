import { useParams } from "react-router-dom";
import{ PokeballImg } from "../assets/pokeball.png"
import{ BulbasaurImg } from "../assets/bulbasaur.gif"
import Footer from "../components/Footer";

const Pokemon = () => {
    const {name} = useParams();
    const navigate = useNavigate()
    
    return
    <>
    <button onClick={{} => navigate(-1)}>
        <img src={PokeballImg} alt="Pokeball" /> Go Back
    </button>
    <div>
        <main>
            <div> {name} </div>

        </main>
    </div>

    <Footer />
    </>
};

export default Pokemon;
