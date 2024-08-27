import React from 'react';
import "./Product.css";
import Rating from '@mui/material/Rating';
export default function Product(){
    return  (<div className='ProductThumb'>
        <div className='imgWrapper'>
        <img data-v-0f749a84="" title="2 Layers Art Supplies Coloring Portable Case Kit (145 Pieces) - Assorted Case Colours &amp; Designs" class="main-img" data-src="https://cdn.shopify.com/s/files/1/0011/8367/8476/files/2LayersArtSuppliesColoringPortableCaseKit_145Pieces_9_300x.png?v=1698930192" src="https://cdn.shopify.com/s/files/1/0011/8367/8476/files/2LayersArtSuppliesColoringPortableCaseKit_145Pieces_9_300x.png?v=1698930192" lazy="loaded"/>
        </div>
        <br/>
        <div className='info'>
            <h6 className='title'>2 Layers Art Supplies Coloring Portable Case Kit (145 Pieces) - Assorted Case Colours &amp; Designs</h6>
            <Rating name="Read-only" value={3} readOnly/>
            <span className='brand d-block'>By SpaceShip Store</span>
            <br/>
            <div className='d-flex align-items-center '>
                <div className='d-flex align-items-center '>
                    <span className='price'>Rs. 1485.00</span>
                    <span className='oldprice'>Rs. 2800.00</span>
                </div>
                <button className=''>Add</button>
            </div>
        </div>
    </div>)
   
}
