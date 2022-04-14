import React, { useContext } from 'react';
import { Container } from './styled';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { dark, light } from '../../constants/theme';
import { Button } from '@material-ui/core';
import { nextHomePage } from '../../Routers/coordinators';
import { useNavigate } from 'react-router-dom';

const Header = ({toogleTheme}) => {
  const { name }  = useContext(ThemeContext)
  const navigate = useNavigate();

  return (
    <Container>
      <h2>Pokémons</h2>
      <Switch
        onChange={toogleTheme}
        checked={name === 'dark'}
        height={20}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        offHandleColor='#fff'
        onColor='#232323'
      />
      <Button  onClick={() =>nextHomePage(navigate) } variante="text" color="primary"><strong><u>Home</u></strong></Button>
    </Container>
  )
}

export default Header;
