import React from 'react';
import {Marker} from 'react-map-gl';

function AlertMarker(props) {
  return (
    <Marker latitude={props.lat} longitude={props.long}>
      <div>You are here</div>
    </Marker>
  )
}

export default AlertMarker;