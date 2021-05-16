import React from 'react'

export default function filter(props:{products:any,sort:any,filterProducts:any}) {
    return (
        <div className="filter">
            <div className="filter-result">{props.products.length} products</div>
            <div className="filter-size">
                Search for products:&emsp;
                <select onChange={props.filterProducts}>
                {props.products.map((item:any) => (
                    <option value={item.title}>{item.title}</option>
                ))}
                   <option value="ALL">ALL</option>
                 </select>
            </div>
        </div>
    )
}
