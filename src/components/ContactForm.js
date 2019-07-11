import React from 'react'
import axios from 'axios'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiaXlkIiwiYSI6ImNqeHl2aG91ejAzaGQzYnFteG12N2cxYWEifQ.nqXYr34IMpN53S4LXwAyeA',
})
const zoom = [13.6];

export default class ContactForm extends React.Component {
  state = {
    name: '',
    subject: '',
    email: '',
    message: '',
    mailSent: false,
    error: null,
    viewport: {
      latitude: 37.785164,
      longitude: -100,
      zoom: 3.5,
      bearing: 0,
      pitch: 0
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
      url: 'http://localhost/api/contact/index.php',
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
    const {viewport} = this.state;
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
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Subject</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      name="subject"
                      id="subject"
                      value={this.state.subject}
                      onChange={this.handleInputChange}
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
                    <button className="button is-primary" type="submit">
                      Send
                    </button>
                  </p>
                </div>
                {this.state.mailSent && <div>Thank you for contacting us.</div>}
              </form>
            </div>
            <div class="column is-half">
              <Map 
                style="mapbox://styles/iyd/cjxyvn1jb0djp1cmp1oiop131"
                containerStyle={{
                  height: '100%',
                  width: '100%',
                }}
                zoom={zoom}
                center={[-0.202432, 50.995418]}
              >
                <Layer
                  type="symbol"
                  id="marker"
                  layout={{ 'icon-image': 'marker-15' }}
                >
                  <Feature
                    coordinates={[-0.254840, 50.989040]}
                  />
                </Layer>
              </Map>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
