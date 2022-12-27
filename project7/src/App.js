import React, { useState, useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

function App() {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";
  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };

  const [marker, setMarker] = useState();

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10
    });    
    setMarker(new mapboxgl.Marker().setLngLat(stores.km20).addTo(map));
    return ()=>{map.remove()};
  },[]);

  function handleStoreChange(e) {    
    setMarker(marker.setLngLat(stores[e.target.value]));
  }

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleStoreChange}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

	export default App;