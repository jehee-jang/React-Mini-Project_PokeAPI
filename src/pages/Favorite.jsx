import { useSelector } from "react-redux"
import { selectFavoritePokemons } from "../RTK/selector"
import { Card } from "../component/Card"

export default function Favorite() {
    const pokemon = useSelector(selectFavoritePokemons)
    return (
            <section className='flex flex-wrap gap-[20px] justify-center pt-[20px]'>
                {pokemon.map(el => <Card key={el.id} pokemon={el}/>)}
            </section>
        )
}
/*
useSelector(selectFavoritePokemons)
인자를 전달해서 실행시킬 필요가 없기 때문에 통째로 넣어서 실행
카드 리턴해주기
*/