import React, { Component } from 'react';
// import MapGL from 'react-map-gl';
import Map from '../views/Map';
import config from '../config';

export default class MapContainer extends Component {
  state = {
    viewport: {
      latitude: 3.900749,
      longitude: -73.073215,
      zoom: 5,
      bearing: 0,
      pitch: 0
    },
    popupInfo: null
  };

  _onViewportChange = (viewport, interaction, oldState) => {
    if(!Object.is(viewport, oldState) && Object.keys(oldState).length) {
      this.setState({
        viewport: {...this.state.viewport, ...viewport}
      })
    }
  };

  render() {
    const {viewport, settings} = this.state;
    return (
        <Map 
          viewport={viewport} 
          settings={settings}
          onViewportChange={this._onViewportChange}
          mapApiKey={config.mapApiKey} />
    )
  }
}