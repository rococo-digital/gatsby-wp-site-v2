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

let Layer = ReactMapboxGl.Layer
let Feature = ReactMapboxGl.Feature
let Marker = ReactMapboxGl.Marker
let ZoomControl = ReactMapboxGl.ZoomControl

const Map = ReactMapboxGl.Map({
  accessToken:
    'pk.eyJ1IjoiaXlkIiwiYSI6ImNqeHl2aG91ejAzaGQzYnFteG12N2cxYWEifQ.nqXYr34IMpN53S4LXwAyeA',
})
const zoom = [13.6]
const center = [-0.202432, 50.995418]

export default class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    telephone: '',
    message: '',
    mailSent: false,
    error: null,
    viewport: {
      latitude: 37.785164,
      longitude: -100,
      zoom: 3.5,
      bearing: 0,
      pitch: 0,
    },
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'post',
      url: 'https://iydl.co.uk/api/365/index.php',
      headers: { 'content-type': 'application/json' },
      data: this.state,
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent,
        })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
      <section id="form" className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      name="name"
                      id="name"
                      placeholder="Your name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="email"
                      className="input"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Telephone</label>
                  <div className="control">
                    <input
                      type="tel"
                      className="input"
                      name="telephone"
                      id="tel"
                      placeholder="Your telephone number"
                      value={this.state.telephone}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      name="message"
                      className="textarea"
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <button className="button is-medium has-background-info is-primary" type="submit">
                      Send
                    </button>
                  </p>
                </div>
                {this.state.mailSent && <div>Thank you for contacting us.</div>}
              </form>
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
          <section className="section">
            <div className="content">
              <h3 className="title">Contact details</h3>
              <div>
                <span>
                  <h5>Telephone</h5>
                  <a href="tel:+44 (0)1293 550400">+44 (0)1293 550400</a>
                </span>
                <span><h5>Email</h5><a href="mailto:support@iydl.co.uk">support@iydl.co.uk</a></span>
              </div>
            </div>
          </section>
        </div>
      </section>
    )
  }
}
