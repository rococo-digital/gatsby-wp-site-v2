import React from 'react'
import facebookIcon from '../img/facebook-icon.svg'
import twitterIcon from '../img/twitter-icon.svg'
import linkedinIcon from '../img/linkedin-icon.svg'
import phoneIcon from '../img/phone-icon.svg'
import emailIcon from '../img/email-icon.svg'

const TopBar = () => {
  return (
    <section className="topbar section has-background-primary">
      <div className="container content is-fullhd">
        <div className="group">
          <a
              className="topbar-item"
              href="tel:00441293550400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon mobile is-hidden-tablet">
                <img src={phoneIcon} alt="Telephone" />
              </span>
              <span className="topbar-item-text is-hidden-mobile">tel:00441293550400</span>
            </a>
            </div>
            <div className="group">
          <a
              className="topbar-item"
              href="mailto:support@iydl.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon mobile is-hidden-tablet">
                <img src={emailIcon} alt="Email" />
              </span>
              <span className="topbar-item-text is-hidden-mobile">support@iydl.co.uk</span>
              
            </a>
            </div>
            <div className="group">
          <a
              className="topbar-item"
              href="https://www.facebook.com/inyourdefence"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={facebookIcon} alt="Facebook" />
              </span>
            </a>
            <a
              className="topbar-item"
              href="https://twitter.com/InYourDefenceUK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={twitterIcon} alt="Twitter" />
              </span>
            </a>
            <a
              className="topbar-item"
              href="https://uk.linkedin.com/in/andrew-parker-4ba14926"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={linkedinIcon} alt="LinkedIn" />
              </span>
            </a>
            
        </div>
      </div>
    </section>
  )
}

export default TopBar
