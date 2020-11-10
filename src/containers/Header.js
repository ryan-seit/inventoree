import React from "react";
import PropTypes from "prop-types";

const Header = () => {
	return (
		<div className='w-screen bg-gray-200'>
			<nav className='grid grid-cols-2'>
				<div className='col-start-1'>
					<h1 className='text-lg font-bold uppercase p-4'>inventoree</h1>
				</div>
				<div className='col-start-2 flex flex-row-reverse mr-3'>
					<button className='text-center text-xs font-medium text-white uppercase bg-blue-400 px-3 m-3 rounded-md'>
						<a href='#'>Sign up</a>
					</button>
					<button className='text-center text-xs font-medium text-white uppercase bg-blue-400 px-3 m-3 rounded-md'>
						<a href='#'>Log in</a>
					</button>
					<button className='text-center text-xs font-medium text-white uppercase bg-blue-400 px-3 m-3 rounded-md'>
						<a href='#'>
							<span>Item List</span>
						</a>
					</button>
					<button className='text-center text-xs font-medium text-white uppercase bg-blue-400 px-3 m-3 rounded-md'>
						<a href='#'>
							<span>Add Item</span>
						</a>
					</button>
				</div>
			</nav>
		</div>
	);
};

Header.propTypes = {};

export default Header;
