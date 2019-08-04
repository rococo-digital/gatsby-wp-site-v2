import React from 'react'
import axios from 'axios'
//import ReactMapboxGl, { Layer, Feature, ZoomControl, Marker } from 'react-mapbox-gl'
import markerIcon from '../img/baseline-room-24px.svg'

let mapboxgl
let ReactMapboxGl = {}

if (typeof window !== `undefined`) {
  mapboxgl = require('mapbox-gl')
  ReactMapboxGl = require('react-mapbox-gl')
} else {
  ReactMapboxGl.Map = () => {
    return class Mock extends React.Component {
      constructor() {
        super()
      }
      render() {
        return <div />
      }
    }
  }
}

let Layer = ReactMapboxGl.Layer;
let Feature = ReactMapboxGl.Feature;
let Marker = ReactMapboxGl.Marker;
let Popup = ReactMapboxGl.Popup;
let ZoomControl = ReactMapboxGl.ZoomControl;

const Map = ReactMapboxGl.Map({
  accessToken:
    'pk.eyJ1IjoiaXlkIiwiYSI6ImNqeHl2aG91ejAzaGQzYnFteG12N2cxYWEifQ.nqXYr34IMpN53S4LXwAyeA',
});
const zoom = [7.0]
const center = [-0.202432, 50.995418]

export default class VenueMap extends React.Component {
  state = {
    viewport: {
      latitude: 37.785164,
      longitude: -100,
      zoom: 13.5,
      bearing: 0,
      pitch: 0,
    },
    brighton_active: false,
    bolney_active: false,
    london_active: false

  }

  

  render() {
   
    return (
      <section id="form" className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-half">
              <h4>Our meeting venues</h4>
              <p>We are nationwide and can meet anywhere in the UK.</p>
              <p>We can also meet you at our own venues:</p>
              <ul>
                <li>Our Practice Hub – Bolney Place, Cowfold Road, RH17 5QT</li>
                <li>London Temple Chambers – Middle Temple Lane, London, EC4Y 7AY</li>
                <li>Brighton Chambers – 22 Ship Street, Brighton, BN1 1AD</li>
              </ul>
            </div>
            <div className="column is-half">
            <Map
                style="mapbox://styles/iyd/cjxyvn1jb0djp1cmp1oiop131"
                containerStyle={{
                  height: '100%',
                  minHeight: '400px',
                  width: '100%',
                }}
                
                zoom={zoom}
                center={center}
              >
               {this.state.bolney_active ? <Popup
                    coordinates={[-0.206575, 50.989228]}
                    >
                    <p>Our Practice Hub<br/>Bolney Place</p>
                  </Popup>:null}
                <Marker
                  coordinates={[-0.206575, 50.989228]}
                  type="symbol"
                  id="Bolney"
                  layout={{ 'icon-image': 'marker-15' }}
                  onClick={() => {
                    this.setState({bolney_active: !this.state.bolney_active});
                    }}>
                
                  <img src={markerIcon} />
                  
                </Marker>
                {this.state.london_active ? <Popup
                    coordinates={[-0.111340, 51.513222]}
                    >
                    <p>London Temple Chambers</p>
                  </Popup>:null}
                <Marker
                   coordinates={[-0.111340, 51.513222]}
                  type="symbol"
                  id="London"
                  layout={{ 'icon-image': 'marker-15' }}
                  onClick={() => {
                    this.setState({london_active: !this.state.london_active});
                    }}>
                
                  <img src={markerIcon} />
                </Marker>
                {this.state.brighton_active ? <Popup
                  id="brighton-info"
                      coordinates={[-0.141831, 50.821927]}
                      >
                      <p>Brighton Chambers</p>
                  </Popup>:
                  null}
                <Marker
                  coordinates={[-0.141831, 50.821927]}
                  type="symbol"
                  id="Brighton"
                  layout={{ 'icon-image': 'marker-15' }}
                  onClick={() => {
                    this.setState({brighton_active: !this.state.brighton_active});
                    }}>
                
                  <img src={markerIcon} />
                  

                </Marker>
                <ZoomControl />
                
              </Map>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
