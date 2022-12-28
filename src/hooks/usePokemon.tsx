import { useState, useEffect } from 'react';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import pokemonApi from '../api/pokemonApi';

export const usePokemon = ( id: string ) => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState<PokemonFull>({} as PokemonFull)

    const loadPokemon = async() => {
        try {
          const resp = await pokemonApi.get<PokemonFull>(`/pokemon/${ id }`);
          setPokemon( resp.data );
          setIsLoading(false);
        } catch(err: any) {
          console.log('Erro na PokeApi', err);
        }
      }

    useEffect(() => {
        loadPokemon();
    }, [])

    return {
        isLoading,
        pokemon
    }
}