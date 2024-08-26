import "./Popular.css";
import Product from '../../../Products/Product';
export default function Popular(){
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
     </section>
    );
}