import React from 'react';
import './index.css';

const navTitles = {
	names: ['About Me','Projects','Resume','Currently','Contact'], 
	labels: ['about','projects','resume','current','contact'] 
};
var navItems = [];
for(var i = 0; i < navTitles['names'].length; i++) {
	navItems.push(<li className="nav-items"><a className="nav-link" href="#" id={navTitles['labels'][i]}>{navTitles['names'][i]}</a></li>);
}

export class MyHeader extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-6 offset-md-3 center-it">
					<p>
						<img src={require("./pinataaron.jpg")} id="my_pic" />
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
