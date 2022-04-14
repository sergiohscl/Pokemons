import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import * as D from "./styles";
import { nextListPage } from "../Routers/coordinators";
import { Button } from "@material-ui/core";
import { textAlign } from "@mui/system";


const DetailsPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const { pokemons } = useContext(GlobalStateContext);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    const currentPokemon = pokemons.find((item) => {
      return item.name === name;
    });
    setSelectedPokemon(currentPokemon);
  }, []);

  return (
      <div>
      <Card sx={{ 
        maxWidth: 550, 
        height: 350, 
        margin: "auto", 
        marginTop: 20,
        marginBottom: 5,
        backgroundColor : "#b8b8b8",
        boxShadow: "1px 1px 4px white",
        textAlign: "center"
        }}>
        <CardActionArea>          
          {selectedPokemon && selectedPokemon.sprites && (
            <D.ImgSelect src={selectedPokemon.sprites.front_default} />
          )}         
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {selectedPokemon && selectedPokemon.name}
            </Typography>
          </CardContent>
        </CardActionArea>        
      </Card>
        <D.CardButton>  
          <Button onClick={() => nextListPage(navigate)} variant="contained" color="primary">
            Voltar
          </Button>
        </D.CardButton>
      </div>
  );
};
export default DetailsPage;
