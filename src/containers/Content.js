import React, { useState } from "react";
// import PropTypes from "prop-types";
// import Item from "./Item";
// import ItemNew from "./ItemNew";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";

const Content = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			itemName: 'Ryans MacBook Pro 15"',
			itemDescription: `MacBook Pro 15" Laptop
				2.3 GHz 8-Core Intel Core i9
				32GB RAM
				765GB SSD
				4GB VRAM
				OS X 10.15.6`,
			itemRoom: "Office",
			itemMake: "Apple",
			itemModel: "MacBook Pro (15-inch, 2019)",
			itemSerial: "C02ZL1DELVDV",
			itemURL:
				"https://getsupport.apple.com/GetSASO?caller=sp&sn=C02ZL1DELVDV&locale=en-US_US",
			itemPrice: "$3,000.00",
			itemVendor: "Apple",
			itemPurchaseDate: "10/01/2019",
			itemPhotoURL:
				"https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/04/macbook-pro-15-inch-render.jpg?itok=0sZuDZaW",
		},
		{
			id: 2,
			itemName: "Ryans iPhone",
			itemDescription: `iPhone XS Max
			iOS 14.1
			512GB Storage
			Space Gray
			IMEI: 35 726409 168695 7`,
			itemRoom: "Living Room",
			itemMake: "Apple",
			itemModel: "iPhone XS Max",
			itemSerial: "F2LXFBJJKPHK",
			itemURL: "https://support.apple.com/kb/SP780?locale=en_US",
			itemPrice: "$999.00",
			itemVendor: "Apple",
			itemPurchaseDate: "03/20/2019",
			itemPhotoURL:
				"https://store.stormfront.co.uk/content/images/thumbs/0008534_iphonexsmax_spacegray_pureangles_q418_screenjpg.jpeg",
		},
		{
			id: 3,
			itemName: "Ryans Apple Watch",
			itemDescription: `Apple Watch Series 5
			watchOS 7.0.2`,
			itemRoom: "Bedroom",
			itemMake: "Apple",
			itemModel: "Apple Watch Series 5",
			itemSerial: "FHLZ3GENMLTQ",
			itemURL:
				"https://support.apple.com/kb/SP808?viewlocale=en_US&locale=en_US",
			itemPrice: "$600.00",
			itemVendor: "Apple",
			itemPurchaseDate: "09/01/2019",
			itemPhotoURL:
				"https://brain-images-ssl.cdn.dixons.com/5/3/10199335/u_10199335.jpg",
		},
		{
			id: 4,
			itemName: 'Ryans MacBook Pro 15"',
			itemDescription: `MacBook Pro 15" Laptop
				2.3 GHz 8-Core Intel Core i9
				32GB RAM
				765GB SSD
				4GB VRAM
				OS X 10.15.6`,
			itemRoom: "Office",
			itemMake: "Apple",
			itemModel: "MacBook Pro (15-inch, 2019)",
			itemSerial: "C02ZL1DELVDV",
			itemURL:
				"https://getsupport.apple.com/GetSASO?caller=sp&sn=C02ZL1DELVDV&locale=en-US_US",
			itemPrice: "$3,000.00",
			itemVendor: "Apple",
			itemPurchaseDate: "10/01/2019",
			itemPhotoURL:
				"https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/04/macbook-pro-15-inch-render.jpg?itok=0sZuDZaW",
		},
		{
			id: 5,
			itemName: "Ryans iPhone",
			itemDescription: `iPhone XS Max
			iOS 14.1
			512GB Storage
			Space Gray
			IMEI: 35 726409 168695 7`,
			itemRoom: "Living Room",
			itemMake: "Apple",
			itemModel: "iPhone XS Max",
			itemSerial: "F2LXFBJJKPHK",
			itemURL: "https://support.apple.com/kb/SP780?locale=en_US",
			itemPrice: "$999.00",
			itemVendor: "Apple",
			itemPurchaseDate: "03/20/2019",
			itemPhotoURL:
				"https://store.stormfront.co.uk/content/images/thumbs/0008534_iphonexsmax_spacegray_pureangles_q418_screenjpg.jpeg",
		},
		{
			id: 6,
			itemName: "Ryans Apple Watch",
			itemDescription: `Apple Watch Series 5
			watchOS 7.0.2`,
			itemRoom: "Bedroom",
			itemMake: "Apple",
			itemModel: "Apple Watch Series 5",
			itemSerial: "FHLZ3GENMLTQ",
			itemURL:
				"https://support.apple.com/kb/SP808?viewlocale=en_US&locale=en_US",
			itemPrice: "$600.00",
			itemVendor: "Apple",
			itemPurchaseDate: "09/01/2019",
			itemPhotoURL:
				"https://brain-images-ssl.cdn.dixons.com/5/3/10199335/u_10199335.jpg",
		},
	]);

	const [activeItem, setActiveItem] = useState([]);
	const [loading, setLoading] = useState(false);

	// const handleSubmit = e => {};

	const handleClick = item => {
		if (item.id !== activeItem.id) {
			setLoading(true);
			setActiveItem(item);
			setInterval(() => {
				setLoading(false);
			}, 200);
		}
	};

	return (
		<div className='text-gray-600'>
			<main className='mx-20 my-10 grid grid-cols-2 gap-10'>
				<div className=''>
					<ItemList items={items} handleClick={handleClick} />
				</div>
				<div className=''>
					<ItemDetails item={activeItem} loading={loading} />
				</div>
			</main>
		</div>
	);
};

// Content.propTypes = {};

export default Content;
