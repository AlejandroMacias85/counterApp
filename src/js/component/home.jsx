import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "/workspace/react-hello/src/js/component/SimpleCounter.jsx";
import Timer from "/workspace/react-hello/src/js/component/SimpleTimer.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<SimpleCounter />
		<Timer />
		</div>
	);
};

export default Home;
