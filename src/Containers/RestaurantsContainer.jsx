import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Restaurants from "../Components/Restaurants"
import { fetchRestaurantInfo } from "../services/api";
import { loadRestaurantsInfo } from "../actions";

export default function RestaurantContainer() {
    const dispatch = useDispatch();
    const searchQuery = useSelector(state=>state.searchQuery);
    const restaurants = useSelector(state=>state.restaurants);


    useEffect(()=>{
        fetchRestaurantInfo(searchQuery).then(response=>{dispatch(loadRestaurantsInfo(response))})
    },[searchQuery.regionName, searchQuery.categoryId])


    return <Restaurants restaurants={restaurants}/>
}