import { useEffect, useState } from "react";
import axios from 'axios';
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
   const {id} = useParams();
    const [restaurantMenu, setListofRestaurants] = useState([]);
    const [menuData, setMenuData] = useState([]);
   

    useEffect(() => {
        featchMenu();
    }, [])

    const featchMenu = async () => {
        axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId="+id)
            .then(res => {
                const resData = res?.data?.data?.cards[2]?.card.card.info;
                const MenuData = res?.data?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.hasOwnProperty('categories')?res?.data?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[1].itemCards:res?.   data?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
                setListofRestaurants(resData);
                setMenuData(MenuData);
            });

    }
    if (restaurantMenu.length == 0) {
        return (<Shimmer />)
    }
    const { name, cuisines, costForTwoMessage } = restaurantMenu;
    return (

        <div className="menu">

            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <h2>Menus</h2>
            <ul className="menu-items">
                {menuData.map((item) => (

                    <li  key={item.card.info.id}>
                        <span className="menu-title">
                            {item.card.info.name}
                        </span>
                        <span>
                            <img width={156} height={144}  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId}></img>
                        </span>

                    </li>
                ))}
            </ul>

        </div>
    )
}

export default RestaurantMenu;