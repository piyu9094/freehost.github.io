import React,{useState} from 'react'
import productsdata from './../data/productdata';
import { Product } from './../componets/Product';


import  Header from '../componets/Header';
import  Cart  from '../componets/Cart'
import  Footer  from '../componets/Footer';




function Home() {
   
  const [tabledark, settabledark] = useState('');


   return (
     <>
       <div className="form-check form-switch">
         <input className="form-check-input" type="checkbox"
           onClick={() => {
             if (tabledark === "tabledark") settabledark('');
             else settabledark('tabledark ')
           }}
         />
       </div>   
             
             
       <Header />
       
       

                     <Cart />
       <table className={`container ${tabledark}`}>         
       <section id='home'>
         <div className='container'>
           <div className='home_content'>
               
              {            
                 productsdata.map((item) => (
                   <Product key={item.id} {...item}>
                     
                   </Product>

                 ))
               
             } 
           </div>
         </div>
       </section>
       </table> 
             <Footer />
            
           
     </>
   )
    
}
export default Home;
