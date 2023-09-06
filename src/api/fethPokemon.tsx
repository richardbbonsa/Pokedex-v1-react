// https://pokeapi.co/api/v2/pokemon/bulbasaur

import { PokemonDetails } from "../types/types";
import { formatName } from "../utils/utils";

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
    const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${formatName(name)}`)

    if (!response.ok) {
        throw new Error(`Error fetching ${name}`);
    }

const result = await response.json();
const pokemon = {
    name: result.name,
    id: result.id,
    imgSrc: result.sprites.front_default,
    hp: result.hp,
    attack: result.attack,
    defense: result.defense,
}
return pokemon;

}