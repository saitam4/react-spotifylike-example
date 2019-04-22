import React from "react";
import { Footbar } from "./footbar.jsx";
import { Playlist } from "./playlist.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Playlist />
				<Footbar />
			</div>
		);
	}
}
