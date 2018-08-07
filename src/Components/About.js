import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

 export default class About extends Component {
  render() {
    return (
      <div >
        <Grid>
            <Jumbotron>
                <h2>About page</h2>
                <p>I am using react bootstrap</p>
            </Jumbotron>
            <Link to="/">
            <Button bsStyle="primary">Home</Button>
            </Link>
        </Grid>
      </div>
    );
  }
}



