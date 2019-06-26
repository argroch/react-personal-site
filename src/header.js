import React from 'react';
import './index.css';



export class MyHeader extends React.Component {
	niceness(x) {
		console.log(x + " dance!");
	}

	render() {

		// const navTitles = {
		// 	names: ['About Me','Projects','Resume','Contact'], 
		// 	labels: ['about','projects','resume','contact'],
		// };
		// var navItems = [];
		// for(var i = 0; i < navTitles['names'].length; i++) {
		// 	var label = navTitles['labels'][i];
		// 	navItems.push(<li className="nav-items"><span className="nav-link" id={navTitles['labels'][i]} value={label} onClick={ () => {this.niceness(label)}}>{navTitles['names'][i]}</span></li>);
		// }

		var names = ['About Me','Projects','Resume','Contact'];
		var labels = ['about','projects','resume','contact'];
		var navItems = [];
		names.map((name,index) => {
			navItems.push(<li className="nav-items"><span className="nav-link" id={labels[index]} onClick={ () => {this.niceness(labels[index])}}>{name}</span></li>);
		});
		

		return (
			<div className="row">
				<div className="col-md-6 offset-md-3 center-it" key="thisthing">
					<p>
						<img src={require("./pinataaron.jpg")} alt="it me!" id="my_pic" onClick={ () => {this.niceness("hiya!")}} />
					</p>
					<h1>
						Aaron Groch
					</h1>
					<h2>
						Coder/Instructor
					</h2>
					<ul className="nav justify-content-center">
						{navItems}
					</ul>
				</div>
			</div>
		);
	}
}
