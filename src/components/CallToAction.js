import React from 'react'

export const CallToAction = ({ title, text, classes}) => {
  const columnClasses = `column is-paddingless ${classes}`
  return (
    <div className={columnClasses}>

          <article className="article-padded">
            <p className="title has-text-white-ter">
              <span className="has-text-weight-bold">{title}</span>
            </p>
            <p className="subtitle has-text-white-ter">{text}</p>
          </article>

    </div>
  )
}

export default CallToAction
