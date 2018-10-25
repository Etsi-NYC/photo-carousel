import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Arrow = ({ direction, clickFunction }) => {
  if (direction === "left") {
    var Arrow = styled.button`
			cursor: pointer;
			font-size: 5rem;
			position: absolute;
			top: 30%;
			left: 0px;
			z-index: 40;
      background-color: rgb(151, 146, 143);
      border-bottom-color: rgb(242, 241, 241);
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 0px;
      border-bottom-style: none;
      border-bottom-width: 0px;
      border-image-outset: 0px;
      border-image-repeat: stretch;
      border-image-slice: 100%;
      border-image-source: none;
      border-image-width: 1;
      border-left-color: rgb(242, 241, 241);
      border-left-style: none;
      border-left-width: 0px;
      border-right-color: rgb(242, 241, 241);
      border-right-style: none;
      border-right-width: 0px;
      border-top-color: rgb(242, 241, 241);
      border-top-left-radius: 3px;
      border-top-right-radius: 0px;
      border-top-style: none;
      border-top-width: 0px;
      box-sizing: border-box;
      color: rgb(242, 241, 241);
      cursor: default;
      display: block;
      filter: none;
      font-family: 
      height: 80px;
      letter-spacing: normal;
      line-height: 86px;
      opacity: 0.4;
      position: absolute;
      right: 0px;
			width: 40px;
			&:focus {
				background-color: #4895A1;
			}
    `;
    var icon = "angle-left";
    var InvisButton = styled.button`
      background: transparent;
      outline: none;
      display: block;
      height: 570px;
      width: 285px;
      cursor: pointer;
      position: absolute;
      top: 0%;
      left: 0%;
      z-index: 39;
      border: none;
    `;
  } else {
    var Arrow = styled.button`
      cursor: pointer;
      font-size: 5rem;
      position: absolute;
      top: 30%;
      left: 530px;
      z-index: 40;
      background-color: rgb(151, 146, 143);
      border-bottom-color: rgb(242, 241, 241);
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 0px;
      border-bottom-style: none;
      border-bottom-width: 0px;
      border-image-outset: 0px;
      border-image-repeat: stretch;
      border-image-slice: 100%;
      border-image-source: none;
      border-image-width: 1;
      border-left-color: rgb(242, 241, 241);
      border-left-style: none;
      border-left-width: 0px;
      border-right-color: rgb(242, 241, 241);
      border-right-style: none;
      border-right-width: 0px;
      border-top-color: rgb(242, 241, 241);
      border-top-left-radius: 3px;
      border-top-right-radius: 0px;
      border-top-style: none;
      border-top-width: 0px;
      box-sizing: border-box;
      color: rgb(242, 241, 241);
      cursor: default;
      display: block;
      filter: none;
      font-family: 
      height: 80px;
      letter-spacing: normal;
      line-height: 86px;
      opacity: 0.4;
      position: absolute;
      right: 0px;
			width: 40px;
			&:focus {
				background-color: #4895A1;
			}
    `;
    var icon = "angle-right";
    var InvisButton = styled.button`
      background: transparent;
      outline: none;
      display: block;
      height: 570px;
      width: 285px;
      cursor: pointer;
      position: absolute;
      top: 0%;
      left: 39.7%;
      border: none;
    `;
  }

  return (
    <div onClick={clickFunction}>
      <Arrow>
        <FontAwesomeIcon icon={icon} opacity=".9" color="white" />
      </Arrow>
      <InvisButton onClick={clickFunction} />
    </div>
  );
};

export default Arrow;
