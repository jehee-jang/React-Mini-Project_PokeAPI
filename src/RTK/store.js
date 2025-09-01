import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemonSlice } from "./slice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
        favorite: favoriteSlice.reducer,
    }
})
/*
store main.jsx에 연결
<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>
이런 형태로 Provider 사용하여 연결해줌
*/

/*
pokemon: pokemonSlice.reducer,
favorite: favoriteSlice.reducer,
slice.js에 있는 코드 연결하여 사용하기
*/
