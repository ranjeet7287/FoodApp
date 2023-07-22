import { IMG_CDN_URL } from "../config";
const ResturantCard=(({cloudinaryImageId,name,cuisines,avgRating,deliveryTime})=>{
    return(
        <div id="card">
            <img alt="food-img" src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <span>{cuisines.join(',')}</span>
            <div id="card-info">
                <span>⭐{avgRating}</span>
                <span>{deliveryTime}min</span>
                <button id="order-btn">Order</button>
            </div>
        </div>
    );
})
export default ResturantCard;