import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = props => {
	return (
		<div className=''>
			<h3 className='text-2xl font-bold border-b mb-2'>Item List</h3>
			<ul className='flex'>
				{props.items.map(item => {
					return (
						<li className='p-3 m-2 rounded-sm shadow-md w-1/2' key={item.id}>
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
