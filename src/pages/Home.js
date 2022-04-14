import React from 'react';
import { useNavigate } from 'react-router-dom';
import { nextListPage } from '../Routers/coordinators';
import imgLabenu from '../assets/imgLabenu.png';
import styled from 'styled-components';

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;    
    align-items: center;
    color: ${props => props.theme.colors.text};    
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    
`

const Home = ()  => {
    const navigate = useNavigate()

    setTimeout(() =>{
        nextListPage(navigate)        
    }, 5000)

  return (
    <ContainerHome>
        
        <img src={imgLabenu} alt='logotipo Labenu'/>
        <Main>
        <h1>Projeto Lista de PoKémons</h1>
        <h2>Desenvolvido pelo estudante Sérgio</h2>
        <ul>
            <h2>Ferramentas utilizadas:</h2>
            <li>React Hooks</li> 
            <li>HTML</li> 
            <li>JavaScript</li> 
            <li>CSS</li>
            <li>Framework-css</li> 
        </ul>
        </Main>
    </ContainerHome>
  )
}
export default Home;
