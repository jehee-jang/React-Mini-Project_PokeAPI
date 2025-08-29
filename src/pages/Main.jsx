import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Main() {
    const pokemonData = useSelector(state => state.pokemon)
    return (
        <section className='flex flex-wrap gap-[20px] justify-center pt-[20px]'>
            {pokemonData.data.map(el => <Card key={el.id} pokemon={el}/>)}
        </section>
    )
}

const CardContainer = styled.section`
    width: 150px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 10px;

    img{
        width: 120px;
    }
`

const Card = ({pokemon}) => {
    const navigate = useNavigate()
    return (
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            <img src ={pokemon.front}/>
            <div>{pokemon.name}</div>
        </CardContainer>
    )
}

/*
Card 선언하여 카드 정보 불러와서 카드 구현하기
styled 컴포넌트 사용하여 카드처럼 디자인 하기

useNavigate()를 사용하여 Detail 페이지로 이동할 수 있게 만들기
onClick={() => navigate(`/detail/${pokemon.id}`)}
카드를 클릭하면 디테일 페이지의 포켓몬의 아이디를 참고하여 이동
*/
