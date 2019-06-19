import React from 'react';
import ReactDOM from 'react-dom';
import {MyHeader} from './header.js';
import './index.css';

{/* const navTitles = ['About Me','Projects','Resume','Currently','Contact'];*/};

class HomePage extends React.Component {
	render() {
		return (
			<div className="container">
				<MyHeader />
				<div className="row">
					<div className="col-md-6 offset-md-3 center-it">
						<p>
							{"Something important will be written here, I'm sure."}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<HomePage />, document.getElementById('root'));