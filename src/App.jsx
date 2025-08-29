import { useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Search from './pages/search'
import Favorite from './pages/Favorite'


function App() {
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
      <h1 className='text-[40px] text-center'>포켓몬 도감</h1>
      <nav className='flex gap-[10px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/detail/1'}>상세정보</Link>
        <Link to={'/search'}>검색</Link>
        <Link to={'/favorite'}>찜목록</Link>
      </nav>
        <Routes>
        <Route path= {'/'} element={<Main />}/>
        <Route path= {'/detail/:pokemonId'} element={<Detail />}/>
        <Route path= {'/search'} element={<Search />}/>
        <Route path= {'/favorite'} element={<Favorite />}/>
      </Routes>
    </>
  )
}
/*
Routes와 Route를 사용하여 페이지 전환 가능하게 해줌
'/detail/:pokemonId'는 포켓몬 아이디를 전달하면 디테일 페이지 불러오게 함
페이지 이동을 위해 nav 안에 Link로 이동 가능하게 함
*/


export default App
