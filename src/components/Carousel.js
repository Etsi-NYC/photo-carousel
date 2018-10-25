import React from 'react';
import Arrow from './Arrow.js';
import ImageSlide from './ImageSlide.js';
import PhotoPreview from './PhotoPreview.js';

const imgUrls = [
	"https://i.etsystatic.com/10554944/r/il/d19abc/1630595027/il_570xN.1630595027_mapr.jpg", 
	"https://i.etsystatic.com/10554944/r/il/125047/1619659946/il_570xN.1619659946_rhdh.jpg",
	"https://i.etsystatic.com/10554944/r/il/0a11c0/1688458893/il_570xN.1688458893_nwdu.jpg",
	"https://i.etsystatic.com/10554944/r/il/648a9f/1641033512/il_570xN.1641033512_ngox.jpg",
	"https://i.etsystatic.com/10554944/r/il/e8e7c9/1690179033/il_570xN.1690179033_lppt.jpg",
	"https://i.etsystatic.com/10554944/r/il/b6bc4a/1690179089/il_570xN.1690179089_ohob.jpg"
]



export default class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0,
			fade: false
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
			currentImageIndex: index,
			fade: true
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index,
			fade: true
		});
	}

	enterSlide(i) {
		this.setState({
			currentImageIndex: i,
			fade: true
		});
	}
	
	render () {
		return (
			<div>
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } fade={this.state.fade}/>
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
				<PhotoPreview urls={imgUrls} clickFunction={this.enterSlide} currIndex={this.state.currentImageIndex}/>
			</div>
		);
	}
}

