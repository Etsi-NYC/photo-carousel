import React from "react";

const buttonStyle = {
	transform: 'translate(520px, -600px)',
	cursor: 'pointer',
	backgroundColor: 'white',
	borderRadius: '50%',
	height: '39px',
	width: '39px',
	position: 'relative',
	zIndex: 4,
	textAlign: 'center',
	display: 'flex',
	border: 'none'
}


const Button = ({ svg, fill, like, alert1, alert2 }) => {
  return (
    <React.Fragment>
      <button style={buttonStyle} onClick={like ? alert2 : alert1}>
        <svg viewBox="0 0 24 24" height="24px" width="24px">
          <path d={svg} fill={fill} />
        </svg>
      </button>
    </React.Fragment>
  );
};

export default Button