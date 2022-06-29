import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Contador from './contador.jsx';
import Timer from './Timer.jsx';
//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<Contador />
		<Timer />
		</div>
	);
};

export default Home;
