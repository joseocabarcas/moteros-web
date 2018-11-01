import React, { Component } from 'react'
import FormContainer from '../containers/FormContainer'
import MapContainer from '../containers/MapContainer'
import './Home.scss'
import MediaQuery from '../utils/mediaQuery';
import FloatButton from '../views/FloatButton';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <MediaQuery media="(min-width: 800px)">
          <section className="home">
            <MapContainer/>
            <FormContainer/>
            <FloatButton nameClass="fab-menu" icon="menu" handleClick={() => console.log("this handleclick")}/>
          </section>
        </MediaQuery>
        <MediaQuery media="(min-width: 400px) and (max-width: 799px)">
          <section className="home">
            <FormContainer/>
          </section>
        </MediaQuery>
      </React.Fragment>
    )
  }
}

export default Home