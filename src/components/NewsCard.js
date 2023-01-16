import React, { Component } from 'react'

export class NewsCard extends Component {
  render() {
    let {title, description, urlImage, newsUrl, author, date} = this.props;
    return (
       
        <div className='container my-3'>
        <div className="card">
        <img src={urlImage} className="card-img-top" alt="name"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read more</a>
        </div>
        <div className="card-footer">
        <small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small>
      </div>
      </div>
      </div>
    )
  }
}

export default NewsCard