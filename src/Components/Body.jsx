import ResturantCard from "./ResturantCard";
import { RestrauntList } from "../config";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(SerachText,Resturant){
    return Resturant.filter((resturant)=>resturant.data.name.toLowerCase().includes(SerachText.toLowerCase()))
}

const Body=(()=>{

    const [SerachText,SetSearchText]=useState("");
    const [allResturant,allsetResturant]=useState([]);
    const [filterResturant,SetFilterResturant]=useState([]);

    useEffect(()=>{
        getResturantCard();
    },[])

    async function getResturantCard(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7901474&lng=80.8892905&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        allsetResturant(json?.data?.cards[2]?.data?.data?.cards);
        SetFilterResturant(json?.data?.cards[2]?.data?.data?.cards);
    }

    return (allResturant.length==0) ? <Shimmer/>:(
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
                    const data=filterData(SerachText,allResturant);
                    SetFilterResturant(data);
                }}>
                    Search
                </button>
            </div>
            <div id="ResturantCards">
                {
                    filterResturant.map((resturant)=>{
                        return<ResturantCard {...resturant.data} key={resturant.data.id}/>
                    })
                }
            </div>
        </>
    );
})
export default Body;