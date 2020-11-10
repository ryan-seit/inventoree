import React from "react";
import PropTypes from "prop-types";

const Item = props => {
	return (
		<div>
			<h3 className='font-bold text-gray-800 text-xl'>{props.item.itemName}</h3>
			<span className='font-light'>{props.item.itemDescription}</span>
		</div>
	);
};

// Item.propTypes = {};

export default Item;
