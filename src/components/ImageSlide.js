import React from 'react';
import './style.css';
import styled, {css, keyframes} from 'styled-components';

const parent = {
	width:'570px',
	height: '570px',
	backgroundColor: 'rgb(245, 245, 241)'
}

const container = {
	width:'100%',
	textAlign: 'center',
	position: 'relative',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)'
}

const fadeIn = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; }
`

const animation = () =>
	css`
		${fadeIn} 0.5s;
	`

const ImageSlide = (props) => {
	const Img = styled.img`
		max-width: 100%;
		max-height: 570px;
		position: relative;
		box-sizing: border-box;
		vertical-align: middle;
		text-align: center;
		text-size-adjust: 100%;
		animation: ${props.fade ? animation : ''};
	`

	return (
		<div style={parent}>
			<div style={container}>
				<Img src={props.url}/>
			</div>
		</div>
	);
}

export default ImageSlide;