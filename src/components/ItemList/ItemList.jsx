
import React, { Fragment } from 'react';
import Item from '../Item/Item';
import { Grid } from '@material-ui/core';
import './ItemList.css';

export default function ItemList({ItemData}) {

    return (
            
        <Fragment className="itemlistcontainer">
            <Grid container spacing={16} justify="center">
                {
                    ItemData.map((post, index) => {

                        // let url ="https://raw.githubusercontent.com/APao-dev/disclosureinc/main/src/assets/img/"
                        // let postIndex = post.url.split('/')[post.url.split('/').length - 2]
                        
                        return(   
                            
                            <Item  key={post.id}  title={post.title} subtitle={post.subtitle}
                            description={post.description} image={post.image} price={post.price} id={post.id}/>
                           
                        )
                    })
                }
                </Grid>
            </Fragment>
    )
}
