import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button'
import Rules from '../../components/Rules/Rules';

import { Title } from '../Home/HomeStyles';
import { Img, LandingBody, LandingContainer } from './LandingStyles';

const Landing = () => {
    const navigate = useNavigate();
  return (
    <LandingContainer>
    <LandingBody>
        
    <Title>Game of Life</Title>

  

    <Img src={'https://3.bp.blogspot.com/-_HEYKhZvdZ8/XDI6gPzbBHI/AAAAAAAABBk/UWn4iRD3-Hcf-_aimA3iIopz8T2QgkgggCKgBGAs/s1600/Koks%2Bgalaxy.gif'} alt='gameofLife'  />
   
    <Button onClick={() => navigate("/home")}> Play</Button>
    <Rules trigger={<Button > Rules</Button>}/>
    
    </LandingBody>
  </LandingContainer>
  )
}

export default Landing