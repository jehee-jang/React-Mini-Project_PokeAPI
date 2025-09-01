import { lazy, Suspense, useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

const Main = lazy(() => import('./pages/Main'))
const Detail = lazy(() => import('./pages/Detail'))
const Search = lazy(() => import('./pages/search'))
const Favorite = lazy(() => import('./pages/Favorite'))
/*
lazy를 사용하여 컴포넌트 최적화
*/

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))
  }, [])
/*
App이 맨처음 렌더링 될 때 dispatch 될 수 있도록 useEffect 사용
dispatch(fetchMultiplePokemonById(151))
thunk의 fetchMultiplePokemonById에 maxPokemonId인 마지막 값인 151 전달
*/


  return (
    <>
      <h1 className='border-t-[30px] border-t-[red] bg-black text-white text-[40px] text-center'>포켓몬 도감</h1>
      <nav className='py-[10px] border-b-[3px] border-b-black flex gap-[20px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <div>
          <input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)} className='w-[120px] border-b border-[darkgray] px-2' />
          <span className='font-bold'>검색</span>
        </div>
      </nav>
      <main className='bg-[gray] flex flex-wrap gap-[20px] justify-center pt-[20px] '>
      <Suspense fallback={<div>로딩중...</div>}>
        <Routes>
          <Route path= {'/'} element={<Main />}/>
          <Route path= {'/detail/:pokemonId'} element={<Detail />}/>
          <Route path= {'/search'} element={<Search />}/>
          <Route path= {'/favorite'} element={<Favorite />}/>
        </Routes>
      </Suspense>
      </main>
    </>
  )
}
/*
Routes와 Route를 사용하여 페이지 전환 가능하게 해줌
'/detail/:pokemonId'는 포켓몬 아이디를 전달하면 디테일 페이지 불러오게 함
페이지 이동을 위해 nav 안에 Link로 이동 가능하게 함
*/

/*
input 요소 사용하여 검색창 만들기
<input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)} 
className='w-[120px] border-b border-[darkgray] px-2' />
navigate를 사용하여 `/search?pokemon=${e.target.value}` 쿼리스트링으로 접근 후 이동
검색 요소 만들어서 검색창인거 표시하기
<span className='font-bold'>검색</span>
*/

/*
<Suspense fallback={<div>로딩중...</div>}>
컴포넌트들은 실제 불러와야 할 때 불러오게 됨
lazy 가져오면서 페이지 로딩 시 화면에 보여주는 값
fallback={<div>로딩중...</div>} 설정
*/

export default App
