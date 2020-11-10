import React, { useState } from "react";
// import PropTypes from "prop-types";
// import Item from "./Item";
// import ItemNew from "./ItemNew";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";

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
			itemPhotoURL: "",
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
			itemPhotoURL: "",
		},
	]);

	const handleSubmit = e => {
		e.preventDefault();
		const newItems = [...items];
		setItems = [{ newItems }, e.target.value];
	};

	return (
		<div className='text-gray-600 container mx-auto w-auto h-screen'>
			<main className='p-10 grid grid-cols-2 gap-20 w-screen'>
				{/* <ItemNew handleSubmit={handleSubmit} /> */}
				<div className=''>
					<ItemList items={items} />
				</div>
				<div className=''>
					<ItemDetails item={items.filter(item => item.name === "Item 1")} />
				</div>
			</main>
		</div>
	);
};

// Content.propTypes = {};

export default Content;
