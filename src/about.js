import React from 'react';
import {MyHeader} from './header.js';
import './index.css';

class AboutMePage extends React.Component {
	render () {
		return (
				<div className="container">
					<MyHeader />
					<div className="row">
						<div className="col-md-6 offset-md-3 center-it">
							<p>
								{"Hi! I'm full-stack web developer, with experience in teaching adults to code. And so forth and so forth..."}
							</p>
						</div>
					</div>
				</div>
			)
	}
}