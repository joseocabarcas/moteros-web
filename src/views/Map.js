import React from 'react';
import MapGL from 'react-map-gl';
import {Marker} from 'react-map-gl';

function Map(props) {
  console.log(props.children)
  return (
    <div style={{height: '100%'}}>
      <MapGL 
        {...props.viewport}
        {...props.settings}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={props.onViewportChange}
        onDblClick={props.onDblClick}
        dragToRotate={true}
        mapboxApiAccessToken={props.mapApiKey} >
        {props.children}
        <Marker latitude={3.900749} longitude={-73.073215}>
          <div>You are here</div>
        </Marker>
        </MapGL>
    </div>
  )
}

export default Map