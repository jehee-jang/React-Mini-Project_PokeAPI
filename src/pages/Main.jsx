import { useSelector } from "react-redux"
import { Card } from "../component/Card"


export default function Main() {
    const pokemonData = useSelector(state => state.pokemon)
    return (
        <section className='bg-[gray] flex flex-wrap gap-[20px] justify-center pt-[20px] '>
            {pokemonData.data.map(el => <Card key={el.id} pokemon={el}/>)}
        </section>
    )
}

/*
{pokemonData.data.map(el => <Card key={el.id} pokemon={el}/>)}
map을 사용하여 데이터 가져오기
*/


