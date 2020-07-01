import React from "react";



export default function Regions({regions, selectedRegionName="", handleClickRegion}) {
    console.log("[Region] -> ", regions)
    console.log("[Region] -> ", selectedRegionName)
    return (
        <ul>
            {regions.length 
            ? regions.map(region => (
                <li key={region.id}>
                    <button 
                    type="button" 
                    onClick={()=>{handleClickRegion(region.id)}}
                >
                    {region.name}
                    {selectedRegionName === region.name && " selected"}
                </button>
                </li>)) 
            : <li>지역 정보가 없습니다.</li>}
        </ul>
    )
}