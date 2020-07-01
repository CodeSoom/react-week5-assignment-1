export const loadRegions =  (regions) => {
    return {
        type:'loadRegions',
        payload:{
            regions
        }
    }
}
export const loadRestaurantsCategories = (categories) => {
    return {
        type:'loadRestaurantsCategories',
        payload:{
            categories
        }
    }
}
export const loadRestaurantsInfo =  (restaurantsInfo) => {
    return {
        type:'loadRestaurantsInfo',
        payload:{
            restaurantsInfo
        }
    }
}

export const updateSearchRegion = (regionId)=>{
    return {
        type:'updateSearchRegion',
        payload:{
            regionId
        }
    }
}
export const updateSearchCatetory = (categoryId)=>{
    return {
        type:'updateSearchCatetory',
        payload:{
            categoryId
        }
    }
}
