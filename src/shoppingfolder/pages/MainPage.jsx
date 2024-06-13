import React,{useState} from 'react';
import Collection from '../component/Collection';
import Banner from '../component/Banner';
import Header from '../component/Header';
import Footer from  '../component/Footer';

import {Gents,Ladies} from '../data';
import WomanCollection from '../component/WomanCollection';

const MainPage =()=> {
    const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion, setLadiesFashion] = useState(Ladies)
    
    console.log(Gents)
  
    return (
    <div>
        <Header/>
        <Banner/>
        <Collection gentsFashion= {gentsFashion}/>
        <WomanCollection ladiesFashion = {ladiesFashion} />
        <Footer/>
    </div>
  )
}

export default MainPage