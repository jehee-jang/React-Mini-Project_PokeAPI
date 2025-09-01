import { getRegExp } from "korean-regexp"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { selectPokemonByRegExp } from "../RTK/selector"
import { Card } from "../component/Card"


export default function Search() {
    const [searchParams] =  useSearchParams()
    const param = searchParams.get('pokemon')
    const reg = getRegExp(param)

    const pokemon = useSelector(selectPokemonByRegExp(reg))

    return (
    <section className='flex flex-wrap gap-[20px] justify-center pt-[20px]'>
        {pokemon.map(el => <Card key={el.id} pokemon={el}/>)}
    </section>
    )
}
/*
useSearchParams를 이용하여 App에 있는 내용 받아오기
searchParams로 쿼리스트링 가져오기
한국어 정규식 다운받기(korean-regexp)
const reg = getRegExp(param) 정규식 생성
const pokemon = useSelector(selectPokemonByRegExp(reg))
를 사용하여 selector.js에서 만든 코드 넘겨주기
<section className='flex flex-wrap gap-[20px] justify-center pt-[20px]'>
{pokemon.map(el => <Card key={el.id} pokemon={el}/>)}
</section>
리턴하여 카드로 보여주기
*/