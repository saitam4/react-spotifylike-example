import React from "react";

//create your first component
export class Footbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			play: false
		};
		this.focusSong = this.focusSong.bind(this);
	}
	focusSong() {
		this.setState({ play: !this.state.play });
	}

	render() {
		return (
			<footer className="footer mt-auto py-3">
				<div className="container">
					<span className="text-muted">
						<div
							className="btn-group"
							role="group"
							aria-label="Basic example">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={this.focusSong}>
								Prev
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								onClick={this.focusSong}>
								{this.state.play ? "Pause" : "Play"}
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								onClick={this.focusSong}>
								Next
							</button>
						</div>
					</span>
				</div>
			</footer>
		);
	}
}
