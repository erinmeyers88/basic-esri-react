import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {loadModules, loadCss} from 'esri-loader';

loadCss('https://js.arcgis.com/4.8/esri/css/main.css');

class App extends Component {

  componentDidMount() {
    loadModules(['esri/Map', 'esri/views/MapView']).then(([Map, MapView]) => {

      const map = new Map({
        basemap: 'streets'
      });

      const mapView = new MapView({
        container: 'mapDiv',
        map,
        zoom: 3
      });

      this.setState({
        map,
        mapView
      });

    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div id="mapDiv" style={{height: 'calc(100vh - 190px)'}}>

        </div>
      </div>
    );
  }
}

export default App;
