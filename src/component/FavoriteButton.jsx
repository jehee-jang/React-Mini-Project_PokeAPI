import { useDispatch, useSelector } from "react-redux"
import { favoriteSlice } from "../RTK/slice"

export default function FavoriteButton({pokemonId}) {
    const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)))
    const dispatch = useDispatch()
    return(
        <button onClick={(e) => {
            e.stopPropagation()
            dispatch(isFavorite ? favoriteSlice.actions.
                removeFromFavorite({pokemonId}) : favoriteSlice.
                actions.addToFavorite({pokemonId}))
        }}
        className={isFavorite ? 'text-red-600' : ''}>
            {isFavorite ? '♥' : '♡'}
        </button>
    )
}
/*
const isFavorite = useSelector(
state => state.favorite.some((item => item === pokemonId)))
props로 받아온 pokemonId가 상태 저장소에 있는지 item과 pokemonId가 일치하는지를
some을 사용해 불리언값으로 리턴(찜 된거면 true, 아니면 false 리턴)
<button onClick={(e) => {
    e.stopPropagation()
    dispatch(isFavorite ? favoriteSlice.actions.
        removeFromFavorite({pokemonId}) : favoriteSlice.
        actions.addToFavorite({pokemonId}))
}}
    className={isFavorite ? 'text-red-600' : ''}>
    {isFavorite ? '♥' : '♡'}
</button>
isFavorite ? 'text-red-600' : ''
isFavorite이면 색상 레드로 아니면 채우지 않기
isFavorite ? '♥' : '♡'
isFavorite이면 ♥로 아니면 ♡
stopPropagation으로 ♡를 눌렀을 때 클릭이벤트가 카드로 전파되지 않게 하기

dispatch(isFavorite ? favoriteSlice.actions.
        removeFromFavorite({pokemonId}) : favoriteSlice.
        actions.addToFavorite({pokemonId}))
이미 찜 목록에 있으면 actions으로 불러와서
removeFromFavorite({pokemonId})로 지우기
아니라면 favoriteSlice.actions.addToFavorite({pokemonId}))로 추가하기
{}로 감싸주는 이유
slice.js에서 (action.payload.pokemonId)라는 키를 콕 찝어서 넣어줌
그래서 객체로 한번 감싸서 넣어야지 pokemonId가 넘어옴
이렇게 하면 변수명에 들어있는 값이 뭐가 들어오든 간에 객체로 한번 감싸서 들어가게 됨
*/