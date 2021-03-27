import React,{useEffect} from 'react';
import Home from './Home';

const About = () => {
	useEffect(() => {
		window.open('https://drive.google.com/file/d/1ed1nRbaDqlWl4KllgKiUv29w7cw0T7_R/view', "_blank",'noopener,noreferrer')
	}, [])
	return <Home/>;
};

export default About;
