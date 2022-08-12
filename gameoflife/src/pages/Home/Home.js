import React from 'react'
import Footer from '../../components/Footer/Footer'
import MainGrid from '../../components/Grid/MainGrid'
import Menu from '../../components/Menu/Menu'
import { HomeContainer} from './HomeStyles'

const Home = () => {
  return (
    <HomeContainer>
        <Menu/>
    <MainGrid/>
    <Footer/>
    </ HomeContainer>
  )
}

export default Home