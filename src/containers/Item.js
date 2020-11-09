import React from "react";
import PropTypes from "prop-types";

const Item = props => {
	return <div>{props.item.itemName}</div>;
};

// Item.propTypes = {};

export default Item;
