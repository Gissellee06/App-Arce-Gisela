
import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles, Hidden }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './NavBar.css'
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  // root: {
  //   flexGrow: 1,
   
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const navigate =useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <AppBar>
        <Toolbar className="navbar-style">

        <Hidden only={['lg', 'md']}> 
        
          <IconButton 
          color="inherit" 
          aria-label="menu" 
          className={classes.menuButton}
          onClick={handleMenu}>
            <MenuIcon/>
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem  onClick={() => navigate.push('/posts/sweaters')}>Sweaters</MenuItem>
                <MenuItem onClick={() => navigate.push('/posts/calzado')}>Calzado</MenuItem>
                <MenuItem onClick={() => navigate.push('/posts/accesorios')}>Accesorios</MenuItem>
                <MenuItem onClick={() => navigate.push('/contact')}>Nosotros</MenuItem>
              </Menu>
                
        </Hidden>


          <Typography variant="h3" className={classes.title}>
          <Link to="/" className="title-disclo">Moda Inc</Link>
         </Typography>


        <div className={classes.categories}>
          <Hidden only={['xs', 'sm']}>
            <Link className="link-nav" onClick={() => navigate.push('/posts/sweaters')} color="inherit"  style={{padding:'30px'}}>Sweaters</Link>
            </Hidden>
            <Hidden only={['xs', 'sm']}>
            <Link className="link-nav" onClick={() => navigate.push('/posts/calzado')} color="inherit" style={{padding:'30px'}}>Calzado</Link>
            </Hidden>
            <Hidden only={['xs', 'sm']}>
            <Link className="link-nav" onClick={() => navigate.push('/posts/accesorios')} color="inherit"  style={{padding:'30px'}}>Accesorios</Link>
          </Hidden>
      </div>


        <Hidden xsDown>
          <Link className="title-disclo"
          to="/contact" style={{margin:"20px"}}>NOSOTROS</Link> 
        </Hidden>

         <CartWidget/>

        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
    
  )
  }


    
  