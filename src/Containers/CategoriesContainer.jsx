import React, { useEffect } from "react";
import Categories from "../Components/Categories"
import { useSelector, useDispatch } from "react-redux";
import { loadRestaurantsCategories, updateSearchCatetory } from "../actions";
import {fetchCategories} from "../services/api"


export default function CategoriesContainer(){
    const dispatch = useDispatch()
    const {categories, searchQuery} = useSelector(state => ({
        categories:state.categories,
        searchQuery:state.searchQuery,
    }));

    const handleClickCategory = (categoryId) =>{
        console.log("[handleClickCategorie]",categoryId)
        dispatch(updateSearchCatetory(categoryId))
    }

    useEffect(()=>{
        fetchCategories().then(response => dispatch(loadRestaurantsCategories(response)))
    },[])
    return (
        <Categories 
            categories={categories}
            selectedCategoryId={searchQuery.categoryId}
            handleClickCategory={handleClickCategory}
        />
    )
}