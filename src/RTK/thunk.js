import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
    'pokemon/fetchMultiplePokemonById',
    async (maxPokemonId) => {
        //포켓몬 데이터 받아오기
    const numberArray = Array.from({length: maxPokemonId}, (_, i) => i + 1)
    /*
    해당 파일의 fetchMultiplePokemonById를 App의 dispatch에 인자로 전달하고
    151로 설정한 fetchMultiplePokemonById을 받아와서 async 해주기
    (_, i) => i + 1 인덱스에 1을 더한 값으로 배열 생성 (인덱스는 0부터 시작이니까 이 값은 1부터 151이 됨)
    */
    console.log(numberArray)

    const fetchAPI = async (pokemonId) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
        //pokemon-species를 사용하여 ${pokemonId}를 통해 포켓몬 주소 가져오기
        //
        const data = await response.json()// json 형태의 파일 자바스크립트로 변환

    //해당 포켓몬 데이터 가져오기
    // {
    //   포켓몬 이름
    //   포켓몬 이미지 -> 앞뒤
    //   포켓몬 설명
    // }
    const pokemonData = {
        id: pokemonId,// 각 부여되어있는 아이디 사용
        name: data.names.find(el => el.language.name === 'ko').name,//한국어로 되어있는 이름 받아오기
        description: data.flavor_text_entries.find(el => el.
        language.name === 'ko').flavor_text,//한국어로 되어있는 포켓몬 정보 받아오기
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,//포켓몬 앞모습 이미지
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`//포켓몬 뒷모습 이미지

    }
    return pokemonData
    }

    return await Promise.all(numberArray.map((el) => fetchAPI(el)))
    //Promise.all 넣어준 값만큼 결과값을 받아온 상태가 들어감
    //numberArray.map을 사용하여 숫자로 되어있는 객체들을 바꿔줌
    //pokemonData 최종적으로 들어갈 수 있도록 함
    } 
)
