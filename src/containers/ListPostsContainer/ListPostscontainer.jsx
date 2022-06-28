/*import React, { useState, useEffect } from 'react';
import ItemList from "../../components/ItemList/ItemList";
import { useParams, Link } from 'react-router-dom';
const {getProducts} = require('../../services/post.service');

export default function ItemListContainer() {

    const[item, setItem] = useState([])
    const{categoryId} = useParams();

    useEffect(() => {
        getProducts()
       
                      
            .then((data) => {
                const category = data.filter(item => item.categorie === categoryId) 
                setItem(category)
            })        
        
    },[categoryId] );

    return(
        <div>
           
            
               <div style={{display: "flex"}}>
                    <ItemList ItemData={item}/>
                </div>
            
        </div>
    )

}
     */