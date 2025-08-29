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