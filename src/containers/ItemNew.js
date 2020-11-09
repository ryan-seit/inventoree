import React, { useState } from "react";
import PropTypes from "prop-types";

const ItemNew = props => {
	const [value, setValue] = useState({});

	return (
		<div>
			<h4>Item New</h4>
			<form onSubmit={e => props.onSubmit(e)}>
				<label>
					Item Name:
					<input type='text' name='Name' />
				</label>
				<br />
				<label>
					Item Description:
					<input type='textarea' name='Description' />
				</label>
				<br />
				<label>
					Item Room:
					<input type='text' name='Room' />
				</label>
				<br />
				<label>
					Item Make:
					<input type='text' name='Make' />
				</label>
				<br />
				<label>
					Item Model:
					<input type='text' name='Model' />
				</label>
				<br />
				<label>
					Item Serial:
					<input type='text' name='Serial' />
				</label>
				<br />
				<label>
					Item URL:
					<input type='url' name='URL' />
				</label>
				<br />
				<label>
					Item Price:
					<input type='number' name='Price' />
				</label>
				<br />
				<label>
					Item Vendor:
					<input type='text' name='Vendor' />
				</label>
				<br />
				<label>
					Item Purchase Date:
					<input type='date' name='Purchase Date' />
				</label>
				<br />
				<label>
					Item Photo:
					<input type='text' name='Photo' />
				</label>
				<br />
				<input type='submit' value='Add Item' />
			</form>
		</div>
	);
};

ItemNew.propTypes = {};

export default ItemNew;
