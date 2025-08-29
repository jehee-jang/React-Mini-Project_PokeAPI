import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer
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

