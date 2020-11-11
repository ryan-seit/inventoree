import React from "react";
import PropTypes from "prop-types";

const Item = props => {
	return (
		<div className='card contents cursor-pointer'>
			<div className='card__img w-1/3'>
				<img
					className='object-contain'
					src={props.item.itemPhotoURL}
					alt={props.item.itemName}
				/>
			</div>
			<div className='w-2/3'>
				<h3 className='card__title font-bold text-gray-800 text-l'>
					{props.item.itemName}
				</h3>
				<span className='card__desc font-light text-xs'>
					{props.item.itemDescription}
				</span>
				<div className='card__labels absolute bottom-0 right-0 text-xs text-white m-2 invisible'>
					<div className='text__brand inline-block bg-blue-600 px-1 my-1'>
						{props.item.itemMake}
					</div>
					<div className='text__room inline-block bg-green-600 px-1 mx-1'>
						{props.item.itemRoom}
					</div>
				</div>
			</div>
		</div>
	);
};

// Item.propTypes = {};

export default Item;
