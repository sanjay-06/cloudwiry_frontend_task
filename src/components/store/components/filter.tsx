import React from 'react'

export default function filter(props:{count:any,size:any,sortProducts:any,sort:any,filterProducts:any}) {
    return (
        <div className="filter">
            <div className="filter-result">{props.count} products</div>
            <div className="filter-sort">
                Order:&emsp;
                <select value={props.sort} onChange={props.sortProducts}>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter:&emsp;
                <select value={props.size} onChange={props.filterProducts}>
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
}
