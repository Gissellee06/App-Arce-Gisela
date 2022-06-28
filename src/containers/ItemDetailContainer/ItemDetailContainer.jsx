/*import React, { useState, useEffect } from "react";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const {getProductsById} = require('../../services/post.service');

export default function ItemDetailContainer() {
        
    const [itemDetail, setItemDetail] = useState([])
    const {id} = useParams()
    

    useEffect(() => {
        
            getProductsById(id)
            // filtrar
            .then(data=> {
                setItemDetail(data)
               
            }
            )
        
    },[id] );



    return (
        <div  className="itemDetailContainer">
            <ItemDetail item={itemDetail}/>
          
        </div>
    )
}



*/