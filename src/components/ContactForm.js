import React from "react"

export default class ContactForm extends React.Component {
  state = {
    name: "",
    subject: "",
    email: "",
    message: "",

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
    alert(`Welcome ${this.state.name}!`)
  }

  render() {
    return(
    <section id="form" class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <form onSubmit={this.handleSubmit}>
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input
                      type="text"
                      class="input"
                      name="name"
                      id="name"
                      placeholder="Your name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      type="email"
                      class="input"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Subject</label>
                  <div class="control">
                    <input
                      type="text"
                      class="input"
                      name="subject"
                      id="subject"
                      value={this.state.subject}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea
                      name="message"
                      class="textarea"
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div class="field is-grouped is-grouped-centered">
                  <p class="control">
                    <button class="button is-primary" type="submit">
                      Send
                    </button>
                  </p>
                  <p class="control">
                    <button class="button is-light" type="reset">
                      Clear
                    </button>
                  </p>
                </div>
                {/* <button type="submit">Send</button>
            <input type="reset" value="Clear" /> */}
              </form>
            </div>
          </div>
        </div>
      </section>)
  }
}