const initialState = {
    searchQuery:{
        regionName:"",
        categoryId:""
    },
    regions:[],
    categories:[],
    restaurants :[]
}

const reducer = (state= initialState, action) =>{
    console.log("***** reducer.action ->", action)
    if(action.type==="loadRegions"){
        return{
            ...state,
            regions:action.payload.regions
        }
    }
    if(action.type==="loadRestaurantsCategories"){
        return {
            ...state,
            categories:action.payload.categories
        }
    }
    if(action.type==="loadRestaurantsInfo"){
        return {
            ...state,
            restaurants:action.payload.restaurantsInfo
        }
    }

    if(action.type==="updateSearchRegion"){
        const {regionId} = action.payload
        return {
            ...state,
            searchQuery:{
                ...state.searchQuery,
                regionName: state.regions.find(region=>region.id === regionId).name
            }
        }
    }
    if(action.type==="updateSearchCatetory"){
        const {categoryId} =action.payload
        return {
            ...state,
            searchQuery:{
                ...state.searchQuery,
                categoryId: categoryId
            }
        }
    }

    


    return state;
}

export default reducer;