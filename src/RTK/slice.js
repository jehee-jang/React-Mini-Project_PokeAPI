import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        loading: true,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMultiplePokemonById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMultiplePokemonById.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
    }
})
/*
포켓몬 상태를 만들고 name: 'pokemon',
initialState: {
        data: [],
        loading: true,
    },
첫 상태는 데이터를 담을 배열을 만들고 로딩을 무조건 해줌

extraReducers -> 비동기적 상태 변경(대표적인 예 : 데이터를 받아와서 사용)
builder라는 인자를 받아서 Promise의 pending(불러오기),rejected(실패),fulfilled 각 상태의 
어떻게 동작할 지 케이스 작성 
예 : .addCase(fetchMultiplePokemonById.pending, (state) => {state.loading = true;})
fetchMultiplePokemonById이 아직 로딩 진행 중일때 상태를 로딩 true로 해줘서 계속 로딩해줌

.addCase(fetchMultiplePokemonById.rejected, (state) => {state.loading = false;})
로딩이 실패하면 로딩이 끝난거니까 false로 해줌

.addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {state.loading = false;state.data = action.payload})
로딩에 성공한 것도 로딩은 끝난거니까 false로 해주고 action의 payload값 넣어줌
(return await Promise.all(numberArray.map((el) => fetchAPI(el)))의 값이 action.payload로 자동으로 들어옴
결과적으로 action.payload의 값을 data: [] 안에 넣어주게 됨
*/

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: [],
    reducers: {
        addToFavorite(state, action) { state.push(action.payload.pokemonId) },
        removeFromFavorite(state, action) { 
            const index = state.indexOf(action.payload.pokemonId)
        if (index !== -1) state.splice(index, 1)
        }
    }
})
/*
initialState: []
처음에는 빈배열로 아무것도 지정 안한 상태로 놔두기
(테스트 할때는 배열 넣어서 확인하고 다 되면 빈배열로 테스트 한번 더 하기)
addToFavorite(state, action) { state.push(action.payload.pokemonId) },
추가하기
state.push(action.payload.pokemonId)
새 배열 복사하여 사용하지 않고 바로 사용해도 되는 이유
redux toolkit은 이머라는 도구를 내장하고 있어서 참조자료형을 건들여도
불변성 유지
복사해서 새로 만들어 넣는것처럼 상태를 업데이트 시켜줌
removeFromFavorite(state, action) { 
    const index = state.indexOf(action.payload.pokemonId)
        if (index !== -1) state.splice(index, 1)
    }
뻬기
splice(index, 1)
splice는 인덱스 값을 사용하여 제거
const index = state.indexOf(action.payload.pokemonId)
인덱스 값 먼저 구해주기
if (index !== -1) state.splice(index, 1)
만약 인덱스 값이 -1이 아니라면 인덱스 위치에 있는 값 하나 제거
*/