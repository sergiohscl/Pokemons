import React, { useContext } from "react";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@material-ui/core";
import { useNavigate, useParams } from 'react-router-dom';
import { nextDetailsPage } from '.././Routers/coordinators';
import GlobalStateContext from "../global/GlobalStateContext";
import Header from '../components/header/Header';
import { Container, ContainerList} from './styles';
import { ThemeProvider } from 'styled-components';

const ListPage = () => {

  const { theme, toogleTheme, pokemons} = useContext(GlobalStateContext);
  const {name} = useParams()
  const navigate = useNavigate()
   
    // const handleClick = (event, name) => { 
    //   navigate(`/list/${name}`) 
    // };    
     
  const newList = pokemons?.map((item) => {
    return (
      <Container key={item.name}>
        <ContainerList >
          <ListItemText
            primary={item.name.toUpperCase()}
            sx={{ color: "#fff" }}
          />
          <Button onClick={() => nextDetailsPage(navigate, item.name)} variant="contained" color="primary">
            Visualizar
          </Button>
        </ContainerList>
      </Container>
    );
  });    

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Header toogleTheme={toogleTheme}/>     
      {newList}       
      </ThemeProvider>     

    </div>
  );
};
export default ListPage;
