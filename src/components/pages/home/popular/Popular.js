import "./Popular.css";
import Product from '../../../Products/Product';
export default function Popular(){


      const data = [
        {image:"https://snooplay.in/cdn/shop/files/71je4deGMFL._SL1500__cleanup_360x.png?v=1704106843",
            name:"Blue Ride-On | Wireless Remote, Bluetooth Mp3 Music and Rechargeable Battery Operated | Jeep A1200 4X4",
            oldPrice:"Rs. 34,999.00",newPrice:"Rs. 15,999.00"},

        {image:"https://snooplay.in/cdn/shop/files/DinosaurTrackSet_TrackGame6google_720x.png?v=1683123555",
            name:"2 Layers Art Supplies Coloring Portable Case Kit (145 Pieces) - Assorted Case Colours & Designs",
            oldPrice:"Rs. 34,999.00",newPrice:"Rs. 15,999.00"},

        {image:"https://snooplay.in/cdn/shop/files/71je4deGMFL._SL1500__cleanup_360x.png?v=1704106843",
            name:"Blue Ride-On | Wireless Remote, Bluetooth Mp3 Music and Rechargeable Battery Operated | Jeep A1200 4X4",
            oldPrice:"Rs. 2,800.00",newPrice:"Rs. 1,485.00"},
        {image:"https://snooplay.in/cdn/shop/files/BatteryOperatedCashRegisterwithScannerandCashBillingMachinePretendPlaySetwithAccessories_33Pieces_2google_540x.png?v=1695020134",
            name:"Battery Operated Cash Register with Scanner and Cash Billing Machine Pretend Play Set with Accessories (33 Pieces)",
            oldPrice:"Rs. 3,500.00",newPrice:"Rs. 2,050.00"},
        {image:"https://snooplay.in/cdn/shop/products/MercedesG-Class9google_720x.png?v=1677567892",
            name:"SUV Diecast Car Model (3220) resembling Mercedes G-class (1:32 Scale)- comes with light & sound feature (Assorted colors and designs)",
            oldPrice:"Rs. 1,850.00",newPrice:"Rs. 1,498.50"},
        {image:"https://cdn.shopify.com/s/files/1/0011/8367/8476/files/Max6_300x.png?v=1724752165",
            name:"Original Licensed Oracle Red Bull Racing RB19 (2023) Diecast Car with Driver Figurine - Sergio Perez  | 1:24 Scale Model",
            oldPrice:"Rs.4,495.00",newPrice:"Rs.3,495.00"},
         {image:"https://cdn.shopify.com/s/files/1/0011/8367/8476/files/KTMRC3_300x.png?v=1724755580",
            name:"Battery Operated Cash Register with Scanner and Cash Billing Machine Pretend Play Set with Accessories (33 Pieces)",
            oldPrice:"Rs.995.00",newPrice:"Rs.795.00"},
         {image:"https://cdn.shopify.com/s/files/1/0011/8367/8476/files/Jaguar1_300x.png?v=1724743845",
            name:"Battery Operated Cash Register with Scanner and Cash Billing Machine Pretend Play Set with Accessories (33 Pieces)",
            oldPrice:"Rs.5,995.00",newPrice:"Rs.4,995.00"},
         {image:"https://cdn.shopify.com/s/files/1/0011/8367/8476/files/Harley5_300x.png?v=1712645060",
            name:"Electric Ride-On Bike (resembling Harley, 3 Wheel Stability, Realistic Features, Music) | COD not Available",
            oldPrice:"Rs.6,999.00",newPrice:"Rs.5,499.00"},  
         {image:"https://snooplay.in/cdn/shop/files/BatteryOperatedCashRegisterwithScannerandCashBillingMachinePretendPlaySetwithAccessories_33Pieces_2google_540x.png?v=1695020134",
            name:"Battery Operated Cash Register with Scanner and Cash Billing Machine Pretend Play Set with Accessories (33 Pieces)",
            oldPrice:"Rs. 3,500.00",newPrice:"Rs. 2,050.00"}, 
        
    ];
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