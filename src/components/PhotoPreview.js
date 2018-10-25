import React from 'react';
import styled from 'styled-components';

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

const PhotoPreview = ({urls, clickFunction, currIndex}) => {
	return (
		<div className="photo-div">
			<ul className="list-unstyled circles">
				{urls.map((url, i) => {
					return (
						<li className="thumbnail" key={i}>
							<ImageThumbnail url={url} index={i} clickFunction={clickFunction} currIndex={currIndex}/>
						</li>
					)}
				)}
			</ul>
		</div>
	)
}

const ImageThumbnail = ({index, clickFunction, currIndex, url}) => {
	return (
		<Img2 i={index} src={url} className="thumbnail-image" onClick={() => clickFunction(index)} currIndex={currIndex}/>
	)
}

export default PhotoPreview;
