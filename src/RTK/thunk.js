import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
    'pokemon/fetchMultiplePokemonById',
    async (maxPokemonId) => {
        //포켓몬 데이터 받아오기
    const numberArray = Array.from({length: maxPokemonId}, (_, i) => i + 1)
    console.log(numberArray)

    const fetchAPI = async (pokemonId) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
        const data = await response.json()

    //해당 포켓몬 정보 가져오기
    // {
    //   포켓몬 이름
    //   포켓몬 이미지 -> 앞뒤
    //   포켓몬 설명
    // }
    const pokemonData = {
        id: pokemonId,
        name: data.names.find(el => el.language.name === 'ko').name,
        description: data.flavor_text_entries.find(el => el.
        language.name === 'ko').flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`

    }
    return pokemonData
    }

    return await Promise.all(numberArray.map((el) => fetchAPI(el)))
    
    } 
)
