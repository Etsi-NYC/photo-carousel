import React from 'react';

const Arrow = ({ direction, clickFunction, glyph }) => {
	if (direction === 'left') {
		var arrowStyles = {
			cursor: 'pointer',
			fontSize: '2rem',
			position: 'absolute',
			top: '40%',
			left: '-3px',
			zIndex: '5'
		}
	} else {
		var arrowStyles = {
			cursor: 'pointer',
			fontSize: '2rem',
			position: 'absolute',
			top: '40%',
			left: '554px'
		}
	}
	return (
		<div 
			style={arrowStyles}
			onClick={ clickFunction }>
			{ glyph } 
		</div>
	)
};

export default Arrow;