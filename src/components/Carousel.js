import React from "react";
import Arrow from "./Arrow.js";
import ImageSlide from "./ImageSlide.js";
import PhotoPreview from "./PhotoPreview.js";
import Button from './Button.js';
import styled from "styled-components";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 


const imgUrls = [
  "https://i.etsystatic.com/10554944/r/il/d19abc/1630595027/il_570xN.1630595027_mapr.jpg",
  "https://i.etsystatic.com/10554944/r/il/125047/1619659946/il_570xN.1619659946_rhdh.jpg",
  "https://i.etsystatic.com/10554944/r/il/0a11c0/1688458893/il_570xN.1688458893_nwdu.jpg",
  "https://i.etsystatic.com/10554944/r/il/648a9f/1641033512/il_570xN.1641033512_ngox.jpg",
  "https://i.etsystatic.com/10554944/r/il/e8e7c9/1690179033/il_570xN.1690179033_lppt.jpg",
  "https://i.etsystatic.com/10554944/r/il/b6bc4a/1690179089/il_fullxfull.1690179089_ohob.jpg"
];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      fade: false
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
		this.enterSlide = this.enterSlide.bind(this);
		this.changeFade = this.changeFade.bind(this);
		this.alertOne = this.alertOne.bind(this);
		this.alertTwo = this.alertTwo.bind(this);
	}

  previousSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
      fade: true
    });
  }

  nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
      fade: true
    });
  }

  enterSlide(i) {
    this.setState({
      currentImageIndex: i,
			fade: true,
			isOpen: false
    });
	}
	
	changeFade() {
		this.setState({
			fade: false
    });
	}

	alertOne() {
		this.props.alert1()
		this.changeFade()
	}

	alertTwo() {
		this.props.alert2()
		this.changeFade()
	}

  render() {
    const Link = styled.a`
      transform: translate(495px, -35px);
      background-clip: border-box;
      background-color: rgba(0, 0, 0, 0);
			border: none;
			color: rgb(153, 153, 153);
      cursor: pointer;
      display: block;
      font-family: "Graphik Webfont", -apple-system, system-ui, Roboto,
        "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
      font-size: 14px;
      height: 19px;
      line-height: 19.6px;
      margin-bottom: 0px;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: -4px;
      padding-bottom: 0px;
      padding-left: 20px;
      padding-right: 0px;
			padding-top: 0px;
			position: absolute;
      text-align: center;
      text-decoration-color: rgb(153, 153, 153);
      text-decoration-line: none;
			text-decoration-style: solid;
			text-decoration: none;
			&:hover {
				text-decoration: none;
			}
    `;

    return (
      <div>
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
        />
        <ImageSlide
          url={imgUrls[this.state.currentImageIndex]}
					fade={this.state.fade}
        />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
        />
        <PhotoPreview
          urls={imgUrls}
          clickFunction={this.enterSlide}
          currIndex={this.state.currentImageIndex}
        />
        <Link onClick={() => this.setState({ isOpen: true })}>&#128269;zoom</Link>
				{this.state.isOpen && (
					<Lightbox
						mainSrc={imgUrls[this.state.currentImageIndex]}
						onCloseRequest={() => this.setState({ isOpen: false , fade: false})}
						enableZoom={false}
					/>
				)}
				<Button 
					svg={this.props.svg}
					fill={this.props.fill}
					like={this.props.like}
					alert1={this.alertOne}
					alert2={this.alertTwo}
				/>
      </div>
    );
  }
}
