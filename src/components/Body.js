import { useState } from "react";
import { restrauList } from "../Config";
import RestuarentCard from "./RestuarentCard";

function filterData(searchText, restraunts){
    const fdata = restraunts.filter((restraunt) => restraunt.data.name.includes(searchText)
        
   );

   return fdata;
    
  }
const Body = () =>{
    
   // let searchTxt="KFC";
   const [searchText, setSearchText] = useState("");
   const [restraunts, setRestraunts] = useState(restrauList);

 
   
    return(
        
    <>
    <div className="searchbox-container">
    <input type="text" className="searchbox" placeholder="enter text here" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    <button className="button" onClick={
        
        ()=>{
            if (searchText !== '') {
             const data = filterData(searchText, restraunts);
             setRestraunts(data);
             setSearchText('');
            }else{
             setRestraunts(restrauList)
            }
            
             
        } }>Search</button>

    </div>
    <h1>{searchText}</h1>

    
    <div className="res">
     {
         restraunts.map((restaurant) =>{
             return <RestuarentCard key={restaurant.data.id} {...restaurant.data}/>
         })
     }
    
    </div>
   
    </>
    )
 }

 export default Body;