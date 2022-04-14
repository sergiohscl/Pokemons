import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { dark, light} from '../constants/theme';
import { baseUrl } from "../constants/urls";
import useRequest from "../hooks/useRequest";
import axios from "axios";

const GlobalState = (props) => {
    const [theme , setTheme] = useState(dark);
    const toogleTheme = () => {
      setTheme(theme.name === 'dark' ? light : dark);
    }
 
  const [requestData, isLoading] = useRequest();
  const [info, setInfo] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  
  const ListPoKemons = async () => {
    const user = await requestData(`${baseUrl}/pokemon/?limit=20`, "get");
    setInfo(user.results);
  };
  useEffect(() => {
    ListPoKemons();
  }, []); 

  useEffect(()=> {
    const newList = [];
    info.forEach((item) => {
      axios.get(`${baseUrl}/pokemon/${item.name}`)
      .then((response) =>{
        newList.push(response.data)
        if (newList.length === 20) {
          const orderedList = newList.sort((a, b) =>{
            return a.id - b.id
          })
          setPokemons(orderedList)
        }
      })
      .catch((error) => console.log(error.message))      
    })
  }, [info]);
   
    const data = {
        info,
        setInfo,
        theme,
        setTheme,
        toogleTheme,
        pokemons,
        setPokemons
    }

    return (
        <GlobalStateContext.Provider value={data} >            
            {props.children}            
        </GlobalStateContext.Provider>
    )
}
export default GlobalState;