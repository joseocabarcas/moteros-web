import React, { Component } from 'react';
import Map from '../views/Map';
// import {Marker} from 'react-map-gl';
import AlertMarker from '../views/AlertMarker';
import config from '../config';

export default class MapContainer extends Component {
  state = {
    alerts: [],
    viewport: {
      latitude: 3.900749,
      longitude: -73.073215,
      zoom: 5,
      bearing: 0,
      pitch: 0
    },
    popupInfo: null,
    settings: {
      dragPan: true,
      dragRotate: true,
      scrollZoom: true,
      touchZoom: false,
      touchRotate: true,
      keyboard: true,
      doubleClickZoom: false,
      minZoom: 0,
      maxZoom: 20,
      minPitch: 0,
      maxPitch: 85
    },
  };

  _onViewportChange = (viewport, interaction, oldState) => {
    if(!Object.is(viewport, oldState) && Object.keys(oldState).length) {
      this.setState({
        viewport: {...this.state.viewport, ...viewport}
      })
    }
  };

  _onDbClick = (state) => {
    const { lngLat } = state
    const [ longitude, latitude ] = lngLat
    const alert = {
      lat: latitude,
      long: longitude,
    }
    this.setState({
      alerts: [ ...this.state.alerts, alert ]
    })
  };

  _renderAlertsMarker = ({ lat, long }, index) => {
    return (
      <AlertMarker key={`marker-${index}`} lat={lat} long={long}>
        <div>You are here</div>
      </AlertMarker>
    )
  }

  render() {
    const {viewport, settings} = this.state;
    return (
      <Map 
        viewport={viewport} 
        settings={settings}
        onViewportChange={this._onViewportChange}
        onDblClick={this._onDbClick}
        mapApiKey={config.mapApiKey}>
        { this.state.alerts.map(this._renderAlertsMarker) }
      </Map>
    )
  }
}