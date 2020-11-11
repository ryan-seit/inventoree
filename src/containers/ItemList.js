import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = props => {
	return (
		<div className=''>
			<h3 className='text-2xl font-bold border-b mb-2'>Item List</h3>
			<ul className='flex-auto scrolling-auto overflow-auto px-3 pb-4'>
				{props.items.map(item => {
					return (
						<li
							className='card flex relative gap-3 p-3 my-4 rounded-md shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out'
							key={item.id}
							value={item.id}
							onClick={() => props.handleClick(item)}
						>
							<Item item={item} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

// ItemList.propTypes = {};

export default ItemList;
