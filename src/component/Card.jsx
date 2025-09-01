import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FavoriteButton from "../component/FavoriteButton"
import { memo, useState } from "react"

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
    border-bottom: 5px solid black;
    border-right: 5px solid black;

    img{
        width: 120px;
    }
`

export const Card = memo(({pokemon}) => {
    const [isImageLoading, setIsImageLoading] = useState(true)
    const navigate = useNavigate()
    return (
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            {isImageLoading ? <div className="w-[120px] h-[120px] leading-[120px] text-center">로딩중...</div> : null}
            <img onLoad={()=> setIsImageLoading(false)} src ={pokemon.front} style={{display: isImageLoading ? 'none' : 'block'}}/>
            <div>
                {pokemon.name}
                <FavoriteButton pokemonId={pokemon.id}/>
            </div>
        </CardContainer>
    )
}
)

/*
Card 선언하여 카드 정보 불러와서 카드 구현하기
styled 컴포넌트 사용하여 카드처럼 디자인 하기

useNavigate()를 사용하여 Detail 페이지로 이동할 수 있게 만들기
onClick={() => navigate(`/detail/${pokemon.id}`)}
카드를 클릭하면 디테일 페이지의 포켓몬의 아이디를 참고하여 이동
*/

/*
<FavoriteButton pokemonId={pokemon.id}/>
찜 버튼 추가하기
*/

/*
const [isImageLoading, setIsImageLoading] = useState(true)
첫 렌더링 시 무조건 한번은 이미지 로딩을 해야 하기 때문에 true로 설정

{isImageLoading ? <div className="w-[120px] h-[120px] 
leading-[120px] text-center">로딩중...</div> : null}
이미지 로딩 중이면 로딩중... 띄우고 아니면 아무것도 띄우지 않도록 설정

<img onLoad={()=> setIsImageLoading(false)} src ={pokemon.front} 
style={{display: isImageLoading ? 'none' : 'block'}}/>
이미지를 로딩중일 땐 이미지를 띄우지 않고 로딩 다 되면 블록 띄우기
onLoad={()=> setIsImageLoading(false)}
로딩이 다 되고 나면 로딩을 false로 지정하여 로딩 멈추게 하기
*/

/*
memo로 card 감싸서 내려오는 props 같다면 부모요소가 리렌더링 되어도 
자식요소 리렌더링 되지 않게 하기
찜 목록에 요소가 많아지게 되면 Card를 넣었다 뺐다 할때마다 
불필요하게 전부 리렌더링 되기 때문에 memo로 감싸서 관리하면 
불필요한 리렌더링을 줄일 수 있다.
*/