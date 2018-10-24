import React from 'react';

const imgUrls = [
	"https://i.etsystatic.com/10554944/r/il/d19abc/1630595027/il_570xN.1630595027_mapr.jpg", 
	"https://i.etsystatic.com/10554944/r/il/125047/1619659946/il_570xN.1619659946_rhdh.jpg",
	"https://i.etsystatic.com/10554944/r/il/0a11c0/1688458893/il_570xN.1688458893_nwdu.jpg",
	"https://i.etsystatic.com/10554944/r/il/648a9f/1641033512/il_570xN.1641033512_ngox.jpg",
	"https://i.etsystatic.com/10554944/r/il/e8e7c9/1690179033/il_570xN.1690179033_lppt.jpg"
]

const Arrow = ({ direction, clickFunction, glyph }) => {
	if (direction === 'left') {
		var arrowStyles = {
			cursor: 'pointer',
			fontSize: '2rem',
			position: 'fixed',
			top: '40%',
			left: '-3px'
		}
	} else {
		var arrowStyles = {
			cursor: 'pointer',
			fontSize: '2rem',
			position: 'fixed',
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
		height: '570px'
	}

	const container = {
		display:'block',
		width:'100%',
		height:'auto',
		backgroundColor: 'rgb(245, 245, 241)'
	}

	const style = {
		display:'block',
		backgroundPosition: 'center',
		maxWidth:'100%',
		maxHeight:'570px',
		marginLeft: 'auto',
		marginRight: 'auto'
	}

	


	return (
		<div style={parent}>
			<div style={container}>
				<img src={url} style={style}/>
			</div>
		</div>
	);
}




export default class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
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
	
	render () {
		return (
			<div>
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] }/>
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

