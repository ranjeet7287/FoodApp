import ResturantCard from "./ResturantCard";
import { RestrauntList } from "../config";
import { useState } from "react";

function filterData(SerachText,Resturant){
    return Resturant.filter((resturant)=>resturant.data.name.toLowerCase().includes(SerachText.toLowerCase()))
}

const Body=(()=>{

    const [SerachText,SetSearchText]=useState("");
    const [Resturant,setResturant]=useState(RestrauntList);


    return(
        <>
            <div id="sperate">
                <input
                id="search" 
                type="text" 
                placeholder="Enter Your Food"
                value={SerachText}
                onChange={(e)=>{
                    SetSearchText(e.target.value)
                }}
                />
                <button id="search-btn"  onClick={()=>{
                    const data=filterData(SerachText,Resturant);
                    setResturant(data);
                }}>
                    Search
                </button>
            </div>
            <div id="ResturantCards">
                {
                    Resturant.map((resturant)=>{
                        return<ResturantCard {...resturant.data} key={resturant.data.id}/>
                    })
                }
            </div>
        </>
    );
})
export default Body;