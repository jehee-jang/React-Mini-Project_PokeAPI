import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"

export default function Detail() {
    const {pokemonId} = useParams()
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
    console.log(pokemon)
    return (
    <div className="flex flex-col justify-center items-center
    border border-[gray] p-[30px] rounded-[10px] px-[50px] w-[400px] mx-auto mt-10">
        <div className="text-[25px] mb-[10px]">{pokemon.name}</div>
        <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
        <img className="w-[250px]" src={pokemon.front}/>
    </div>
    )
}

/*
useParams를 사용하여 포켓몬 아이디 구조 분해 할당으로 받아오기
const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
RTK에 selector 자바스크립트 파일 생성하여 원하는 정보만 받아올 수 있게 하기
selectPokemonById를 숫자로 변환하여 가져오기(Number(pokemonId))
useParams에 들어오는 값은 스트링이기 때문에 아이디와 조건 일치하려면 숫자로 바꿔줘야함
*/