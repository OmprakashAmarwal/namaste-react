import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import axios from 'axios';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    const [listofRestaurants, setListofRestaurants] = useState([]);
    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    const [filteredRes,setfilteredRes] = useState([]);

    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        axios.get(`http://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true`)
            .then(res => {
                const restaurant = res?.data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants;
                setListofRestaurants(restaurant);
                setfilteredRes(restaurant);
            });

    }
    if (listofRestaurants.length == 0) {
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="search">
                <input onChange={(e) => {
                    setSearchText(e.target.value);
                }} value={searchText} type="text" className="search-box" />
                
                <button onClick={() => {
                    const filteredres = searchText===""?listofRestaurants: listofRestaurants.filter(x => x.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilteredRes(filteredres);
                }} >search</button>
            </div>
            <div className="res-container">
                {
                    filteredRes.map(restaurant => <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>)
                }
            </div>
        </div>
    )
}
export default Body;