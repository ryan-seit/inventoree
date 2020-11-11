import React from "react";
// import PropTypes from "prop-types";

const ItemDetails = props => {
	return (
		<div id={props.item.id} className=''>
			<h3 className='text-2xl font-bold border-b mb-2 transition-opacity duration-1000 ease-in-out'>
				Item Details
			</h3>
			<div
				className={
					props.loading ? "opacity-0" : "transition-opacity duration-1000"
				}
			>
				<div className='text-3xl font-bold text-black'>
					{props.item.itemName}
				</div>
				<img
					src={props.item.itemPhotoURL}
					alt={props.item.itemName}
					className='p-5'
				/>
				<div className='bg-teal-700 text-white p-2'>
					{props.item.itemMake} - {props.item.itemModel}
				</div>
				<div className='my-2'>
					Description: <br />
					{props.item.itemDescription}
				</div>
				<div>Room: {props.item.itemRoom}</div>
				<div>Price: {props.item.itemPrice}</div>
				<div>Vendor: {props.item.itemVendor}</div>
				<div>Purchase Date: {props.item.itemPurchaseDate}</div>
			</div>
		</div>
	);
};

ItemDetails.propTypes = {};

export default ItemDetails;
