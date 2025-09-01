import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"
import FavoriteButton from "../component/FavoriteButton"
import FlipCard from "../component/FlipCard"

export default function Detail() {
    const {pokemonId} = useParams()
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)))

    return (
    <div className="flex flex-col justify-center items-center
    border p-[50px] rounded-[10px] px-[50px] w-[400px] mx-auto mt-20 border-b-[7px] border-r-[7px]
    border-black bg-white">
        <div className="text-[25px] mb-[10px]">{pokemon.name} <FavoriteButton pokemonId={Number(pokemonId)}/></div>
        <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
        <FlipCard front={pokemon.front} back={pokemon.back}/>
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

/*
<FavoriteButton pokemonId={Number(pokemonId)}/>
이름 옆에 찜 버튼 위치시키기

<FlipCard front={pokemon.front} back={pokemon.back}/>
카드 앞 뒤 구분하여 넣어주기
*/