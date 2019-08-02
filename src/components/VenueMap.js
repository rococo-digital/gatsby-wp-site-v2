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
let ZoomControl = ReactMapboxGl.ZoomControl;

const Map = ReactMapboxGl.Map({
  accessToken:
    'pk.eyJ1IjoiaXlkIiwiYSI6ImNqeHl2aG91ejAzaGQzYnFteG12N2cxYWEifQ.nqXYr34IMpN53S4LXwAyeA',
});
const zoom = [13.6]
const center = [-0.202432, 50.995418]

export default class ContactForm extends React.Component {
  state = {
    viewport: {
      latitude: 37.785164,
      longitude: -100,
      zoom: 3.5,
      bearing: 0,
      pitch: 0,
    },
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
                  width: '100%',
                }}
                
                zoom={zoom}
                center={center}
              >
                <Marker coordinates={center} anchor="bottom">
                  <img src={markerIcon} />
                </Marker>
                <Layer
                  type="symbol"
                  id="marker"
                  layout={{ 'icon-image': 'marker-15' }}
                >
                  <Feature coordinates={[-0.202432, 50.995418]} />
                </Layer>
                <ZoomControl />
                
              </Map>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
