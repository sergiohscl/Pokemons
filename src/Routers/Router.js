import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ListPage from '../pages/ListPage';
import DetailsPage from '../pages/DetailsPage';


const Router = () => {
  return (
    <BrowserRouter>    
    <Routes>        
        <Route path= '/' element={<Home/>}/>
        <Route path='/List/:name' element={<ListPage/>}/>
        <Route path='/List/Details/:name' element={<DetailsPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default Router;
