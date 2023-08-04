import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import {Typography,Drawer,IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import Production from "./Production.js";
import AboutUs from "./AboutUs.js"
import './App.css';
function App(){
    const [Open,setOpen]=useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    function Sidebar(){
      return(
        <>
        <Drawer align="left" open={Open} onClose={handleDrawerClose}>
        <div className='Sidebar'>
          <div className='S'>
        <Typography variant="h5" className='Sb'><Link to="/Production">Productions</Link></Typography>
        <Typography variant="h5" className='Sb'><Link to="/AboutUs">?About Us</Link></Typography>
        </div>
        </div>
        </Drawer>
        
    
       </>
      );
    }
  return(
    <>
    <BrowserRouter>
    <IconButton onClick={handleDrawerOpen} color="inherit"><MenuIcon/></IconButton>
    <Sidebar/>
    <Routes>
      <Route path="/Production" element={<Production/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}
export default App;
