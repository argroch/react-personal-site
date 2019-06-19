import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class GeoPage extends React.Component {
	render() {
		return (
			<div class="container">
				<MyHeader />
				<div class="row">
					<h1>What did you say?</h1>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<geoPage />, document.getElementById('root'));
