import React from "react";

//create your first component
export class Playlist extends React.Component {
	focusSong() {
		// Explicitly focus the text input using the raw DOM API
		// Note: we're accessing "current" to get the DOM node
		alert();
	}
	render() {
		const elements = [
			{
				id: 1,
				category: "game",
				name: "Mario Castle",
				url: "files/mario/songs/castle.mp3"
			},
			{
				id: 2,
				category: "game",
				name: "Mario Star",
				url: "files/mario/songs/hurry-starman.mp3"
			},
			{
				id: 3,
				category: "game",
				name: "Mario Overworld",
				url: "files/mario/songs/overworld.mp3"
			},
			{
				id: 4,
				category: "game",
				name: "Mario Stage 1",
				url: "files/mario/songs/stage-1.mp3"
			},
			{
				id: 5,
				category: "game",
				name: "Mario Stage 2",
				url: "files/mario/songs/stage-2.mp3"
			},
			{
				id: 6,
				category: "game",
				name: "Mario Star",
				url: "files/mario/songs/hurry-starman.mp3"
			},
			{
				id: 7,
				category: "game",
				name: "Mario Underworld",
				url: "files/mario/songs/underworld.mp3"
			},
			{
				id: 8,
				category: "game",
				name: "Mario Underwater",
				url: "files/mario/songs/underwater.mp3"
			},
			{
				id: 9,
				category: "game",
				name: "Zelda Castle",
				url: "files/zelda/songs/castle.mp3"
			},
			{
				id: 10,
				category: "game",
				name: "Zelda Outworld",
				url: "files/zelda/songs/outworld.mp3"
			},
			{
				id: 11,
				category: "game",
				name: "Zelda Title",
				url: "files/zelda/songs/title.mp3"
			},
			{
				id: 12,
				category: "game",
				name: "Sonic Brain Zone",
				url: "files/sonic/songs/brain-zone.mp3"
			}
		];
		return (
			<div>
				{elements.map((value, index) => {
					return (
						<li onClick={this.focusSong} key={index}>
							{value.name}
						</li>
					);
				})}
			</div>
		);
	}
}
