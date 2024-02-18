import { Route, Routes } from 'react-router'
import './App.css'
import {HomePage, AboutPage, NotFoundPage, SinglePage} from './pages/index'
import Header from './Componenets/header/Header'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route element = {<HomePage/>} path='/' />
      <Route element = {<AboutPage/>} path='/about' />
      <Route element = {<SinglePage/>} path='/singlePage/:id'/>
      <Route element = {<NotFoundPage/>} path='*' />
    </Routes>
    </>
  )
}

export default App
