import React from "react";

export default function Categories({categories, selectedCategoryId,  handleClickCategory}){
    console.log("[Categories] -> ", categories)
    console.log("[Categories] -> ", selectedCategoryId)
    return (
        <ul>
            {categories.length 
            ? categories.map(category => (
                <li key={category.id}>
                    <button 
                        type="button"
                        onClick={()=>handleClickCategory(category.id)}
                    >
                        {category.name}
                        {selectedCategoryId === category.id && " selected"}
                    </button>
                </li>)) 
            : <li>카테고리 정보가 없습니다.</li>}
        </ul>
    )
}