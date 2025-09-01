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

export const selectPokemonByRegExp = (reg) => createSelector(
    state => state.pokemon.data,
    (pokemon) => pokemon.filter(el => el.name.match(reg))
)

export const selectFavoritePokemons = createSelector(
    state => state.pokemon.data,
    state => state.favorite,
    (pokemon, favorite) => {
        return pokemon.filter(el => favorite.includes(el.id))
    }
)
/*
export const selectPokemonByRegExp = (reg) => createSelector(
    state => state.pokemon.data,
    (pokemon) => pokemon.filter(el => el.name.match(reg))
)
reg 정규식을 입력받아서 createSelector로 셀렉트를 함
(pokemon) => pokemon.filter(el => el.name.match(reg))
포켓몬의 이름이 정규식의 이름과 일치하는 것 필터링하여 리턴하기
*/

/*
export const selectFavoritePokemons = createSelector(
    state => state.pokemon.data,
    state => state.favorite,
    (pokemon, favorite) => {
        return pokemon.filter(el => favorite.includes(el.id))
    }
)
전체 포켓몬의 정보가 정보 스토어 안에 다 들어있기 때문에
인자를 밖에서 받아올 필요 없음
createSelector 바로 할당
state => state.pokemon.data,
포켓몬 전체 데이터와 
state => state.favorite,
찜한 포켓몬의 데이터 받아오기
(pokemon, favorite) => {
        return pokemon.filter(el => favorite.includes(el.id))
    }
두개의 상태를 사용하고 있기 때문에 두개의 인자를 모두 사용
포켓몬의 아이디가 찜 목록 안에 있으면(includes(el.id)) filter로 걔네만 남겨서 리턴
*/