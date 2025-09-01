import { useState } from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.5s;
    transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`
/*
transform-style: preserve-3d;
3d 효과 만들기
transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
props.flipped의 값이 true이면 뒤집혀 있게하고 아니면 회전 안시킨다는 의미로 deg 0으로 주기
position: relative; 줘서 앞 뒤면 겹치지 않게 하기
*/


const FrontImage = styled.img`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
`
/*
카드 앞면 지정
backface-visibility: hidden;
카드가 뒤집혀 있을 때 뒷면 안보이게 설정
position: absolute;
뒷면 이미지와 겹치지 않도록 설정
*/


const BackImage = styled.img`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`
/*
카드 뒷면 지정
backface-visibility: hidden;
카드가 뒤집혀 있을 때 앞면 안보이게 설정
transform: rotateY(180deg);
y축 기준 180도 회전
미리 회전 시켜서 뒷면이 돌아왔을 때 정상화 되도록 설정
*/



export default function FlipCard({front, back}) {
    const [flipped, setFlipped] = useState(false)

    return (
        <>
            <FlipImageContainer flipped={flipped}>
                <FrontImage src={front}/>
                <BackImage src={back}/>
            </FlipImageContainer>
            <button onClick={() => setFlipped(prev => !prev)}>뒤집기</button>
        </>
    )
}
/*
<FlipImageContainer flipped={flipped}>
    <FrontImage src={front}/>
    <BackImage src={back}/>
</FlipImageContainer>
카드 이미지 표시
src={front} 
부모요소(FlipCard({front, back}))에서 props 내려받아서 띄우기
const [flipped, setFlipped] = useState(false)
useState로 상태 뒤집기 상태 관리하기
<button onClick={() => setFlipped(prev => !prev)}>뒤집기</button>
뒤집기 버튼 만들기
<FlipImageContainer flipped={flipped}>
flipped={flipped} 값 내려서 작동되게 하기
*/