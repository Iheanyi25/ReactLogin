import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
// import "./Home.css";

 export default class News extends Component {
  render() {
    return (
      <div >
        <Grid>
            <Jumbotron>
                <h2>News page</h2>
                <p>glitch is love !</p>
            </Jumbotron>
            <Link to="/">
            <Button bsStyle="primary">Home</Button>
            </Link>
        </Grid>
      </div>
    );
  }
}

