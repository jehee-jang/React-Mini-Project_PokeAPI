import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) => createSelector(
    state => state.pokemon.data,
    (pokemon) => pokemon.find(el => el.id === pokemonId)
)
/*
state => state.pokemon.data,
상태에서 포켓몬의 데이터에 있는 값 가져오기
data까지 들어가야 렌더링 한 정보 나옴
불러온 데이터 pokemon에 인자로 넣고 아이디가 일치하는 것만 찾아서 표시
*/