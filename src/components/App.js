import React, { Component } from 'react';
import logo from '../assets/hackday.svg';
import '../styles/index.css'

class App extends Component {
	render() {
		return (
			<div className = 'div-style'>
				 <div className= 'container'>
					<img src = {logo} alt = 'logo' width = '10%' />
					<h1 className = 'h1-white'>BurdaHackDay <br/> Let's Start </h1>
				 </div>
			</div>

			);
	}
}

export default App;