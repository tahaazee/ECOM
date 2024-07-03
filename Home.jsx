
import Navbar from './Navbar';
import ProductListing from './ProductListing';

import React, { createContext, useState,useContext,CartContext } from 'react';
import ProductBox from './Productbox';
import Footer from './Fotter';
import Banner from './Banner';
import Pro from './Pro';


function Home() {


    
    return(



        


        <>
         <div><Navbar /></div>
   <Banner/>
  <Pro/>
   <Footer/>
        </>
    )
}

export default Home;