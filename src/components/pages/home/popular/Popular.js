import "./Popular.css";
import Product from '../../../Products/Product';
import { useEffect , useState } from "react";
import axios from "axios";
export default function Popular(){


      const [data,setData]= useState([]);
      useEffect(()=>{
        axios.get("http://localhost:8000/products")
        .then(res=>{setData((res.data))})
        .catch(err=>{console.log(err)});
    },[]);
    return(
        <section className="homeProducts">
        <div className="container-fluid">
            <div className="d-flex align-items-center pop" >
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <div className="list">
            <ul className=" list-inline ml-auto filterTabs">
                <li className="list-inline-item ">
                    <a className="cursor">All</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Cooking</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Cleaning &amp; Organising</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Time Management</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Managing Finances</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Puzzles</a>
                </li>
            </ul>
            </div>
            </div>
        </div>
        <div className="productRow">
           {
                data.length!==0&&data.map((item)=>{
                    return (
                        
                            <div className="item">
                                
                                 <Product data={item}/>
                             </div>
                        
                    );
                })
}
        </div>
     </section>
    );
}