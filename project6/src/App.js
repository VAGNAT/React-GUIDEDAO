import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"

function App() {
	const [random, setRandom] = useState(Math.random());

	mapboxgl.accessToken = "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";
	// const [map,SetMap] = useState("");
	useEffect(() => {		
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [39.61192, 55.76199],
			zoom: 10
		});			
		return;		
	}, []);
	return (
		<>
			<button
				className="ui-button"
				id="rerender"
				onClick={() => setRandom(Math.random())}
			>
				Ререндер!
			</button>
			<div id="map"></div>
		</>
	);
}

export default App;