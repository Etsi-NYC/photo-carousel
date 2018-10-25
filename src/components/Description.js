import React from "react";
import styled from "styled-components";
import axios from "axios";

var Line = styled.hr`
  width: 570px;
  margin: 0;
`;

var DescriptionDiv = styled.div`
  position: relative;
  width: 570px;
  height: auto;
  padding-bottom: 10px;
  transform: translate(0, -20px);
`;

var DescriptionHeader = styled.h2`
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  display: block;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans",
    "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 25px;
  line-height: 20.6px;
  margin-block-end: 0px;
  margin-block-start: 12px;
  text-align: left;
	width: 570px;
`;

var TextBody = styled.div`
  color: rgb(34, 34, 34);
  display: block;
  font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Droid Sans",
    "Segoe UI", Helvetica, Arial, sans-serif;
	font-size: 14px;
	white-space: pre-line;
	width: 570px;
	overflow-wrap: break-word;
	word-break: break-all;
	hyphens: auto;
`;

var Divider = styled.a`
	color: black;
	text-decoration: underline;
	font-weight: bold;
	cursor: pointer;
`
export default class Description extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			showText: false,
			text: ''
		};
		this.toggleText = this.toggleText.bind(this);
	}
	
	toggleText() {
		this.setState({showText: !this.state.showText});
	}

	componentDidMount() {
		var id = window.location.href.slice(30);
		axios.get(`/api/${id}`)
			.then((res) => this.setState({text: res.data[0].description}))
	}


  render() {
		if (!this.state.showText) {
			return (
				<DescriptionDiv>
					<Line/>
					<DescriptionHeader>Description</DescriptionHeader>
					<TextBody>{this.state.text.slice(0, 350).replace(/ /g, "\u00a0")}</TextBody>
					<Divider onClick={this.toggleText}>+ More</Divider>
				</DescriptionDiv>
			)
		} else {
			return (
				<DescriptionDiv>
					<Line/>
					<DescriptionHeader>Description</DescriptionHeader>
					<TextBody>{this.state.text.replace(/ /g, "\u00a0")}</TextBody>
					<Divider onClick={this.toggleText}>- Less</Divider>
				</DescriptionDiv>
			)
		}
	
	}
}
