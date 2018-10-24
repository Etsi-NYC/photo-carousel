import React from 'react';
import styled from 'styled-components';

const imgUrls = [
	"https://i.etsystatic.com/10554944/r/il/d19abc/1630595027/il_570xN.1630595027_mapr.jpg", 
	"https://i.etsystatic.com/10554944/r/il/125047/1619659946/il_570xN.1619659946_rhdh.jpg",
	"https://i.etsystatic.com/10554944/r/il/0a11c0/1688458893/il_570xN.1688458893_nwdu.jpg",
	"https://i.etsystatic.com/10554944/r/il/648a9f/1641033512/il_570xN.1641033512_ngox.jpg",
	"https://i.etsystatic.com/10554944/r/il/e8e7c9/1690179033/il_570xN.1690179033_lppt.jpg",
	"https://i.etsystatic.com/10554944/r/il/b6bc4a/1690179089/il_570xN.1690179089_ohob.jpg"
]

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

const ImageSlide = ({ url }) => {
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

	const style = {
		maxWidth:'100%',
		maxHeight: '100%',
		maxHeight:'570px',
		position: 'relative',
		zIndex: 0
	}

	return (
		<div style={parent}>
			<div style={container}>
				<img src={url} style={style}/>
			</div>
		</div>
	);
}

const PhotoPreview = ({urls, clickFunction, currIndex}) => {
	return (
		<div className="photo-div">
			<ul className="list-unstyled circles">
				{urls.map((url, i) => {
					return (
						<li className="thumbnail">
							<ImageThumbnail url={url} index={i} clickFunction={clickFunction} currIndex={currIndex}/>
						</li>
					)}
				)}
			</ul>
		</div>
	)
}

const Img2 = styled.img`
	background-color: rgb(153, 153, 153);
	border-bottom-color: rgb(34, 34, 34);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	border-bottom-style: none;
	border-bottom-width: 0px;
	border-image-outset: 0px;
	border-image-repeat: stretch;
	border-image-slice: 100%;
	border-image-source: none;
	border-image-width: 1;
	border-left-color: rgb(34, 34, 34);
	border-left-style: none;
	border-left-width: 0px;
	border-right-color: rgb(34, 34, 34);
	border-right-style: none;
	border-right-width: 0px;
	border-top-color: rgb(34, 34, 34);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	border-top-style: none;
	border-top-width: 0px;
	color: rgb(34, 34, 34);
	font-size: 14px;
	max-height: 30px;
	line-height: 19.6px;
	min-width: 30px;
	max-width: 30px;
	opacity: ${props => props.currIndex === props.i ? 1 : 0.6};
	&:hover {
		opacity: 1;
	}
	outline-color: rgb(59, 153, 252);
	outline-style: auto;
	outline-width: ${props => props.currIndex === props.i ? "5px" : 0};
`;




const ImageThumbnail = ({index, clickFunction, currIndex, url}) => {
	return (
		<Img2 i={index} src={url} className="thumbnail-image" onClick={() => clickFunction(index)} currIndex={currIndex}/>
	)
}




export default class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
		this.enterSlide = this.enterSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}

	enterSlide(i) {
		this.setState({
			currentImageIndex: i
		});
	}
	
	render () {
		return (
			<div>
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] }/>
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
				<PhotoPreview urls={imgUrls} clickFunction={this.enterSlide} currIndex={this.state.currentImageIndex}/>
			</div>
		);
	}
}

