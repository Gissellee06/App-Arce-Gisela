import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import ListPostsContainer from '../ListPostsContainer/ListPostscontainer';
import ListItemContainer from '../ListItemContainer/ListItemContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import HomePageContainer from '../homePage/HomePageContainer';
import ContactContainer from '../Contact/ContactContainer';
import CartContainer from '../CartContainer/CartContainer';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';

function App() {

    return(
    
            <BrowserRouter>
            <NavBar/>  
              
            <Routes>
        <Route exact path="/">
         <HomePageContainer/>
         </Route>
              

         <Route exact path="/posts">
         <ListPostsContainer/>       
         </Route>

         <Route path="/posts/:categoryId">  
         <ListItemContainer/> 
         </Route>

         <Route path="/contact">
         <ContactContainer/> 
         </Route>

        
         <Route path="/item/:id">
         <ItemDetailContainer/>
         </Route>


         <Route path="/login">
         <Login/> 
         </Route>

         <Route path="/cart">
         <CartContainer/> 
         </Route>

       </Routes>
       <Footer/>
       </BrowserRouter>
       

    )

} 

 export default App;