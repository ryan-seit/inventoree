import React, { useState } from "react";
// import PropTypes from "prop-types";
import ItemNew from "./ItemNew";
import ItemList from "./ItemList";

const Content = () => {
	const randomNum = Math.floor(Math.random() * 10 + 1);

	const [items, setItems] = useState([
		{
			id: randomNum,
			itemName: "Item 1",
			itemDescription: "Item 1 Desc",
			itemRoom: "Item 1 Room",
			itemMake: "Item 1 Make",
			itemModel: "Item 1 Model",
			itemSerial: "Item 1 Serial",
			itemURL: "Item 1 URL",
			itemPrice: "$1.99",
			itemVendor: "Amazon",
			itemPurchaseDate: "10/01/2020",
			itemPhoto: "",
		},
		{
			id: randomNum + 1,
			itemName: "Item 2",
			itemDescription: "Item 2 Desc",
			itemRoom: "Item 2 Room",
			itemMake: "Item 2 Make",
			itemModel: "Item 2 Model",
			itemSerial: "Item 2 Serial",
			itemURL: "Item 2 URL",
			itemPrice: "$200.99",
			itemVendor: "Besjt Buy",
			itemPurchaseDate: "11/01/2020",
			itemPhoto: "",
		},
	]);

	const handleSubmit = e => {
		e.preventDefault();
		const newItems = [...items];
		setItems = [{ newItems }, e.target.value];
	};

	return (
		<div>
			<h3>Content</h3>
			<ItemNew handleSubmit={handleSubmit} />
			<ItemList items={items} />
		</div>
	);
};

// Content.propTypes = {};

export default Content;
