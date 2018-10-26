import React from "react";
import styled from "styled-components";
import axios from "axios";

var sampleText = `
YUM! This fragrance begins with an apple cider accord and blends with fried donuts. The fragrance has a spicy cinnamon accord which rests on a sugary vanilla base with tonka bean and musk.		YUM! This fragrance begins with an apple cider accord and blends with fried donuts. The fragrance has a spicy cinnamon accord which rests on a sugary vanilla base with tonka bean and musk.
 ••••••••••		••••••••••
 All A to Z Candles are made with high quality 100% non genetically modified soy wax, cotton wicks, and premium fragrance oils. My products are always cruelty-free and vegan. 		All A to Z Candles are made with high quality 100% non genetically modified soy wax, cotton wicks, and premium fragrance oils. My products are always cruelty-free and vegan. 
 • 4oz: 2 5/8" H x 2 1/4” D		• 4oz: 2 5/8" H x 2 1/4” D
Burn Time: ~30 hours		Burn Time: ~30 hours
Single Wick		Single Wick
 • 9oz: 3 1/2" H x 2 3/4” D		• 9oz: 3 1/2" H x 2 3/4” D
Burn Time: ~70 hours		Burn Time: ~70 hours
Single Wick		Single Wick
 • 16oz: 4 1/4" H x 3 3/4” D		• 16oz: 4 1/4" H x 3 3/4” D
Burn Time: ~100 hours		Burn Time: ~100 hours
Double Wick		Double Wick
 • 26 oz: 5 1/2" H x 3 7/8" D		• 26 oz: 5 1/2" H x 3 7/8" D
Burn Time: ~ 200 Hours		Burn Time: ~ 200 Hours
Double Wick		Double Wick
 WHEN WILL THIS SHIP? 		WHEN WILL THIS SHIP? 
Please check current production time in the cart or here in the listing where you find the shipping cost. Business days do not include Holidays or weekends. 		Please check current production time in the cart or here in the listing where you find the shipping cost. Business days do not include Holidays or weekends. 
 Enjoy $4.00 flat rate shipping for the USA in the entire shop! Join A to Z Rewards for discounts on orders! Visit atozcandles.com to find out how.		Enjoy $4.00 flat rate shipping for the USA in the entire shop! Join A to Z Rewards for discounts on orders! Visit atozcandles.com to find out how.
 Please refer to the images on this post for accurate size representations - I do all I can to help you understand what you will receive. My candles are made with high quality ingredients, and also burn 30-50% longer than paraffin candles. Please keep this in mind when looking at the candle sizes - for instance, the 4oz jar has the same burn times as larger, 3 wick paraffin big box candles.		Please refer to the images on this post for accurate size representations - I do all I can to help you understand what you will receive. My candles are made with high quality ingredients, and also burn 30-50% longer than paraffin candles. Please keep this in mind when looking at the candle sizes - for instance, the 4oz jar has the same burn times as larger, 3 wick paraffin big box candles.
`;

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


var Divider = styled.a`
  color: black;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
`;
export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      text: sampleText
    };
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText() {
    this.setState({ showText: !this.state.showText });
  }

  componentDidMount() {
    var id = window.location.href.slice(30);
    axios
      .get(`/api/${id}`)
      .then(res => this.setState({ text: res.data[0].description }));
  }

  render() {
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
			background-image: ${this.state.showText ? '' : '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.2)))'};
			-webkit-background-clip: ${this.state.showText ? '' : 'text'};
			-webkit-text-fill-color: ${this.state.showText ? '' : 'transparent'};
		`;



    if (!this.state.showText) {
      return (
        <DescriptionDiv>
          <Line />
          <DescriptionHeader>Description</DescriptionHeader>
          <TextBody>
            {this.state.text.slice(0, 350).replace(/ /g, "\u00a0")}
          </TextBody>
          <Divider onClick={this.toggleText}>+ More</Divider>
        </DescriptionDiv>
      );
    } else {
      return (
        <DescriptionDiv>
          <Line />
          <DescriptionHeader>Description</DescriptionHeader>
          <TextBody>{this.state.text.replace(/ /g, "\u00a0")}</TextBody>
          <Divider onClick={this.toggleText}>- Less</Divider>
        </DescriptionDiv>
      );
    }
  }
}
