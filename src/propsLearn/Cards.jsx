import React from "react";

function Card(){
	return(
	<div>
	<div className = "cards">
		<div className = "card">
			<img src = {props.imgsrc} className = "myImage">
			<div className = "card__info">
				<span className = "card__category">
					{props.title}
				</span>
				<a href = {props.link} target = "_blank">
					<button> Watch Now </button>
				</a>
			</div>
		</div>
	</div>
	</div>
	);
}

export default Card;