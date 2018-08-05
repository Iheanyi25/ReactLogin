import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

 export default class Home extends Component {
  render() {
    return (
      <div >
        <Grid>
            <Jumbotron>
                <h2>Welcome, Iheanyi</h2>
                <p>I am using react bootstrap</p>
            </Jumbotron>
            <Link to="/about">
            <Button bsStyle="primary">About</Button>
            </Link>
        </Grid>
      </div>
    );
  }
}
