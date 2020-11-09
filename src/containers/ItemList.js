import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = props => {
	return (
		<div>
			<h3>Item List</h3>
			<ul>
				{props.items.map(item => {
					return (
						<li key={item.id}>
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
