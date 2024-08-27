import React from 'react';
import "./Deals.css";
import Rating from '@mui/material/Rating';
import Product from './Product';
export default function Deals(){
    
   return (

    <div className='homeProducts'> 
        <div className="productRow">
            <div className="item">
                <Product/>
            </div>
            <div className="item">
                <Product/>
            </div>
            <div className="item">
                <Product/>
            </div>
            <div className="item">
                <Product/>
            </div>
            <div className="item">
                <Product/>
            </div>
        </div>
         <div className="productRow">
            <div className="item">
                <Product/>
            </div>
            <div className="item">
                <Product/>
            </div>
            <div className="item">
                <Product/>
            </div>
            <div className="item">
                <Product/>
            </div>
            <div className="item">
                <Product/>
            </div>
        </div>
       
    </div>
 
   );
}
