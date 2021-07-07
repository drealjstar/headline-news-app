import React, { Component } from "react";
import "./tag.css";
import { Link } from "react-router-dom";

class Tags extends Component {
  
  render() {

    return (
      <div className="flag">
        
        <h1 className="flag-header">COUNTRIES HEADLINE NEWS</h1>

        <div className="countries">
          <Link to="/news/ng" >
            <div className="NIG country" >
              <h2>NIGERIA</h2>
            </div>
          </Link>
          
          <Link to="/news/us" >

          <div className="USA country">
            <h2>USA</h2>
          </div>
        </Link>

        <Link to="/news/gb">
          <div className="ENG country" >
            <h2>UNITED KINGDOM</h2>
          </div>
          </Link>

          <Link to="/news/ar">
          <div className="ARG country" >
            <h2>ARGENTINA</h2>
          </div>
          </Link>

        </div>
      </div>
    );
  }
}

export default Tags;
