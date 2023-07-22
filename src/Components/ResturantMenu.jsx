import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
const ResturantMenu=(()=>{
    const {id}=useParams();

    const [resturantMenu,SetresturantMenu]=useState({});

    useEffect(()=>{
        getMenu();
    },[])

    async function getMenu(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        SetresturantMenu(json.data?.cards[0]?.card?.card?.info)
    }


    return(
        <div id="sperate">
            <div>
                <h1>Resturant Id :{id}</h1>
                <h2>{resturantMenu.name}</h2>
                <img src={IMG_CDN_URL+resturantMenu.cloudinaryImageId}/>
                <p>{resturantMenu.cuisines}</p>
                <h3>{resturantMenu.city}</h3>
                <h4>{resturantMenu.areaName}</h4>
            </div>
        </div>
    );
})
export default ResturantMenu;