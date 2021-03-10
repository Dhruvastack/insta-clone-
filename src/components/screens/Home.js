import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>dddd</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1590505787849-4f73eec6a390?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBwYXBlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
        </div>
        <div className="card-content">
          <h6>title</h6>
          <p>this is a post wall</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>








      <div className="card home-card">
        <h5>dddd</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1590505787849-4f73eec6a390?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBwYXBlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
        </div>
        <div className="card-content">
            <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>title</h6>
          <p>this is a post wall</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
}
