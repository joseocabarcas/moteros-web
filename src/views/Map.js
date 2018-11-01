import React from 'react';
import MapGL from 'react-map-gl';

function Map(props) {
  return (
    <div style={{height: '100%'}}>
      <MapGL 
        {...props.viewport}
        {...props.settings}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={props.onViewportChange}
        dragToRotate={true}
        mapboxApiAccessToken={props.mapApiKey} />
    </div>
  )
}

export default Map