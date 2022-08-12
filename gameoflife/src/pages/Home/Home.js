import React from 'react'
import MainGrid from '../../components/Grid/MainGrid'
import Menu from '../../components/Menu/Menu'
import { HomeContainer, Title } from './HomeStyles'

const Home = () => {
  return (
    <HomeContainer>
        <Title> Game of life</Title>
        <Menu/>
    <MainGrid/>

    </ HomeContainer>
  )
}

export default Home