import React, { Component } from 'react';

export default class News_Box extends Component {
  render() {
    let {title, content, image, readMore, publicedDate, author, source} = this.props;
    return (
    <>
      <div className="card my-2 bg-dark text-light" id="cardItem" style={{width:"18rem", height:"34rem", overflow: "scroll"}}>
        <div>
          <span className="badge rounded-pill position-absolute end-0 text-bg-success"> {source === null ? "Source Is Not Defined" : source}</span>
        </div>
        <img src={image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-k55yHlrIwDjEBKGY2srmEBFQ2MDdwel3Q&usqp=CAU" : image} className="card-img-top" style={{height:"9rem"}} alt="Image Loading Fail"/>
        <div className="card-body">
          <h5 className="card-title">{title === null ? "Title Is Not Defined" : title}</h5>
          <hr/>
          <p className="card-text">{content === null ? "Content Is Defined" : content} <a className="text-info" href={readMore}>Read More...</a></p>
          <p className="my-2 text-secondary text-decoration-underline card-subtitle mb-2">{author === null ? "Writter Is Not Defined" : "Written By: " + author} on {publicedDate === null ? "Date Is Not Defined" : new Date(publicedDate).toGMTString() }</p>
        </div>
      </div>
    </>
  );
}
}
